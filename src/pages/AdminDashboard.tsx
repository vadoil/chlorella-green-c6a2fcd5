import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LogOut, Users, FileText, Eye, Trash2, Leaf, Clock, Phone, Mail, MapPin } from "lucide-react";

interface Lead {
  id: string;
  name: string | null;
  phone: string | null;
  email: string | null;
  city: string | null;
  comment: string | null;
  source: string;
  quiz_region: string | null;
  quiz_direction: string | null;
  quiz_budget: string | null;
  status: string;
  created_at: string;
}

const statusColors: Record<string, string> = {
  new: "bg-primary/10 text-primary border-primary/20",
  contacted: "bg-yellow-100 text-yellow-800 border-yellow-200",
  closed: "bg-muted text-muted-foreground border-border",
};

const statusLabels: Record<string, string> = {
  new: "Новая",
  contacted: "В работе",
  closed: "Закрыта",
};

const sourceLabels: Record<string, string> = {
  quiz: "Квиз",
  cta: "Форма заявки",
  lead_magnet: "Лид-магнит",
  website: "Сайт",
};

const AdminDashboard = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(true);

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/admin/login");
    }
  }, [user, isAdmin, loading, navigate]);

  useEffect(() => {
    if (isAdmin) fetchLeads();
  }, [isAdmin]);

  const fetchLeads = async () => {
    const { data } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    setLeads((data as Lead[]) || []);
    setLoadingLeads(false);
  };

  const updateStatus = async (id: string, status: string) => {
    await supabase.from("leads").update({ status }).eq("id", id);
    fetchLeads();
  };

  const deleteLead = async (id: string) => {
    if (!confirm("Удалить заявку?")) return;
    await supabase.from("leads").delete().eq("id", id);
    fetchLeads();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg gradient-emerald flex items-center justify-center">
              <Leaf className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-foreground">Админ-панель</span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1">
              <Eye className="h-4 w-4" /> Сайт
            </Link>
            <Button variant="ghost" size="sm" onClick={signOut} className="gap-1 text-muted-foreground">
              <LogOut className="h-4 w-4" /> Выйти
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Всего заявок", value: leads.length, icon: FileText },
            { label: "Новых", value: leads.filter(l => l.status === "new").length, icon: Users },
            { label: "В работе", value: leads.filter(l => l.status === "contacted").length, icon: Clock },
          ].map((s) => (
            <div key={s.label} className="bg-card rounded-xl border border-border p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Leads table */}
        <div className="bg-card rounded-xl border border-border overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h2 className="font-display font-bold text-lg text-foreground">Заявки</h2>
          </div>

          {loadingLeads ? (
            <div className="p-8 text-center text-muted-foreground">Загрузка...</div>
          ) : leads.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">Заявок пока нет</div>
          ) : (
            <div className="divide-y divide-border">
              {leads.map((lead) => (
                <div key={lead.id} className="p-5 hover:bg-muted/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-semibold text-foreground">{lead.name || "Без имени"}</span>
                        <Badge variant="outline" className={statusColors[lead.status] || ""}>
                          {statusLabels[lead.status] || lead.status}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {sourceLabels[lead.source] || lead.source}
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                        {lead.phone && (
                          <span className="flex items-center gap-1"><Phone className="h-3.5 w-3.5" />{lead.phone}</span>
                        )}
                        {lead.email && (
                          <span className="flex items-center gap-1"><Mail className="h-3.5 w-3.5" />{lead.email}</span>
                        )}
                        {lead.city && (
                          <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{lead.city}</span>
                        )}
                      </div>
                      {(lead.quiz_region || lead.quiz_direction || lead.quiz_budget) && (
                        <div className="mt-2 text-xs text-muted-foreground bg-muted/50 rounded-lg px-3 py-2">
                          Квиз: {[lead.quiz_region, lead.quiz_direction, lead.quiz_budget].filter(Boolean).join(" · ")}
                        </div>
                      )}
                      {lead.comment && (
                        <p className="mt-2 text-sm text-muted-foreground italic">«{lead.comment}»</p>
                      )}
                      <p className="text-xs text-muted-foreground mt-2">
                        {new Date(lead.created_at).toLocaleString("ru-RU")}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <select
                        value={lead.status}
                        onChange={(e) => updateStatus(lead.id, e.target.value)}
                        className="text-sm border border-border rounded-lg px-2 py-1.5 bg-background text-foreground"
                      >
                        <option value="new">Новая</option>
                        <option value="contacted">В работе</option>
                        <option value="closed">Закрыта</option>
                      </select>
                      <Button variant="ghost" size="icon" onClick={() => deleteLead(lead.id)} className="text-muted-foreground hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
