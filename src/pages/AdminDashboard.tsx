import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Upload, Trash2, Home } from "lucide-react";

interface Content {
  id: string;
  title: string;
  description: string | null;
  content_type: string;
  file_url: string;
  thumbnail_url: string | null;
  published: boolean;
}

const AdminDashboard = () => {
  const [user, setUser] = useState<any>(null);
  const [contents, setContents] = useState<Content[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // Form states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contentType, setContentType] = useState<"flyer" | "affiche" | "video">("flyer");
  const [file, setFile] = useState<File | null>(null);
  const [thumbnail, setThumbnail] = useState<File | null>(null);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    
    if (!session) {
      navigate("/admin/login");
      return;
    }

    // Check if user has admin role
    const { data: roleData, error: roleError } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', session.user.id)
      .eq('role', 'admin')
      .single();

    if (roleError || !roleData) {
      toast({
        title: "Accès refusé",
        description: "Vous n'avez pas les permissions d'administrateur",
        variant: "destructive",
      });
      await supabase.auth.signOut();
      navigate("/");
      return;
    }

    setUser(session.user);
    loadContents();
    setLoading(false);
  };

  const loadContents = async () => {
    const { data, error } = await supabase
      .from('portfolio_content')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Erreur",
        description: "Impossible de charger les contenus",
        variant: "destructive",
      });
      return;
    }

    setContents(data || []);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/admin/login");
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      toast({
        title: "Erreur",
        description: "Veuillez sélectionner un fichier",
        variant: "destructive",
      });
      return;
    }

    setUploading(true);

    try {
      // Upload main file
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const { error: uploadError, data: fileData } = await supabase.storage
        .from('portfolio-content')
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      const { data: { publicUrl: fileUrl } } = supabase.storage
        .from('portfolio-content')
        .getPublicUrl(fileName);

      // Upload thumbnail if exists
      let thumbnailUrl = null;
      if (thumbnail) {
        const thumbExt = thumbnail.name.split('.').pop();
        const thumbName = `thumb_${Math.random()}.${thumbExt}`;
        const { error: thumbError } = await supabase.storage
          .from('portfolio-content')
          .upload(thumbName, thumbnail);

        if (!thumbError) {
          const { data: { publicUrl } } = supabase.storage
            .from('portfolio-content')
            .getPublicUrl(thumbName);
          thumbnailUrl = publicUrl;
        }
      }

      // Save to database
      const { error: dbError } = await supabase
        .from('portfolio_content')
        .insert({
          title,
          description,
          content_type: contentType,
          file_url: fileUrl,
          thumbnail_url: thumbnailUrl,
          published: true,
        });

      if (dbError) throw dbError;

      toast({
        title: "Succès",
        description: "Contenu ajouté avec succès",
      });

      // Reset form
      setTitle("");
      setDescription("");
      setFile(null);
      setThumbnail(null);
      loadContents();
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string, fileUrl: string, thumbnailUrl: string | null) => {
    try {
      // Delete from storage
      const fileName = fileUrl.split('/').pop();
      if (fileName) {
        await supabase.storage
          .from('portfolio-content')
          .remove([fileName]);
      }

      if (thumbnailUrl) {
        const thumbName = thumbnailUrl.split('/').pop();
        if (thumbName) {
          await supabase.storage
            .from('portfolio-content')
            .remove([thumbName]);
        }
      }

      // Delete from database
      const { error } = await supabase
        .from('portfolio_content')
        .delete()
        .eq('id', id);

      if (error) throw error;

      toast({
        title: "Succès",
        description: "Contenu supprimé avec succès",
      });

      loadContents();
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-elegant flex items-center justify-center">
        <p>Chargement...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-elegant">
      <div className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard Admin</h1>
          <div className="flex gap-4">
            <Button variant="outline" onClick={() => navigate("/")}>
              <Home size={18} className="mr-2" />
              Retour au site
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut size={18} className="mr-2" />
              Déconnexion
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Form */}
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <CardTitle>Ajouter du contenu</CardTitle>
              <CardDescription>
                Uploadez vos créations (flyers, affiches, vidéos)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleUpload} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Titre</Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Type de contenu</Label>
                  <Select value={contentType} onValueChange={(value: any) => setContentType(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flyer">Flyer</SelectItem>
                      <SelectItem value="affiche">Affiche</SelectItem>
                      <SelectItem value="video">Vidéo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file">Fichier principal</Label>
                  <Input
                    id="file"
                    type="file"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                    accept={contentType === 'video' ? 'video/*' : 'image/*'}
                    required
                  />
                </div>

                {contentType === 'video' && (
                  <div className="space-y-2">
                    <Label htmlFor="thumbnail">Miniature (optionnel)</Label>
                    <Input
                      id="thumbnail"
                      type="file"
                      onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
                      accept="image/*"
                    />
                  </div>
                )}

                <Button type="submit" disabled={uploading} className="w-full">
                  <Upload size={18} className="mr-2" />
                  {uploading ? "Upload en cours..." : "Ajouter"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Content List */}
          <Card className="shadow-elegant border-border/50">
            <CardHeader>
              <CardTitle>Vos contenus</CardTitle>
              <CardDescription>
                Gérez vos créations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-[600px] overflow-y-auto">
                {contents.map((content) => (
                  <div
                    key={content.id}
                    className="flex items-center justify-between p-4 bg-muted rounded-lg"
                  >
                    <div className="flex-1">
                      <p className="font-medium">{content.title}</p>
                      <p className="text-sm text-muted-foreground">
                        Type: {content.content_type}
                      </p>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(content.id, content.file_url, content.thumbnail_url)}
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                ))}
                {contents.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">
                    Aucun contenu pour le moment
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;