-- Create table for portfolio content (flyers, affiches, videos)
-- Use text for content_type instead of enum
CREATE TABLE IF NOT EXISTS public.portfolio_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  content_type TEXT NOT NULL CHECK (content_type IN ('flyer', 'affiche', 'video')),
  file_url TEXT NOT NULL,
  thumbnail_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  published BOOLEAN DEFAULT true
);

-- Enable RLS
ALTER TABLE public.portfolio_content ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Public can view published content" ON public.portfolio_content;
DROP POLICY IF EXISTS "Authenticated users can insert content" ON public.portfolio_content;
DROP POLICY IF EXISTS "Authenticated users can update content" ON public.portfolio_content;
DROP POLICY IF EXISTS "Authenticated users can delete content" ON public.portfolio_content;

-- Public can view published content
CREATE POLICY "Public can view published content"
ON public.portfolio_content
FOR SELECT
USING (published = true);

-- Authenticated users can manage all content
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

-- Create storage bucket for portfolio files (if not exists)
INSERT INTO storage.buckets (id, name, public)
VALUES ('portfolio-content', 'portfolio-content', true)
ON CONFLICT (id) DO NOTHING;

-- Drop existing storage policies if they exist
DROP POLICY IF EXISTS "Public can view portfolio content" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated can upload portfolio content" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated can update portfolio content" ON storage.objects;
DROP POLICY IF EXISTS "Authenticated can delete portfolio content" ON storage.objects;

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

-- Trigger for updated_at (if function exists)
DROP TRIGGER IF EXISTS update_portfolio_content_updated_at ON public.portfolio_content;

CREATE TRIGGER update_portfolio_content_updated_at
BEFORE UPDATE ON public.portfolio_content
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();