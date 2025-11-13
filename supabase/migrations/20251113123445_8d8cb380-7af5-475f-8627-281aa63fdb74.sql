-- Create enum for content types
CREATE TYPE content_type AS ENUM ('flyer', 'affiche', 'video');

-- Create table for portfolio content (flyers, affiches, videos)
CREATE TABLE public.portfolio_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  content_type content_type NOT NULL,
  file_url TEXT NOT NULL,
  thumbnail_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  published BOOLEAN DEFAULT true
);

-- Enable RLS
ALTER TABLE public.portfolio_content ENABLE ROW LEVEL SECURITY;

-- Public can view published content
CREATE POLICY "Public can view published content"
ON public.portfolio_content
FOR SELECT
USING (published = true);

-- Authenticated users can manage all content (admin only will be checked in app)
CREATE POLICY "Authenticated users can insert content"
ON public.portfolio_content
FOR INSERT
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update content"
ON public.portfolio_content
FOR UPDATE
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete content"
ON public.portfolio_content
FOR DELETE
TO authenticated
USING (true);

-- Create storage bucket for portfolio files
INSERT INTO storage.buckets (id, name, public)
VALUES ('portfolio-content', 'portfolio-content', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies
CREATE POLICY "Public can view portfolio content"
ON storage.objects
FOR SELECT
USING (bucket_id = 'portfolio-content');

CREATE POLICY "Authenticated can upload portfolio content"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'portfolio-content');

CREATE POLICY "Authenticated can update portfolio content"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'portfolio-content');

CREATE POLICY "Authenticated can delete portfolio content"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'portfolio-content');

-- Trigger for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_portfolio_content_updated_at
BEFORE UPDATE ON public.portfolio_content
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();