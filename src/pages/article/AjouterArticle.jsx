import { useState } from "react";

const darkBg = '#0a0e1a';
const cardBg = '#111827';
const inputBg = '#0d1424';
const borderColor = '#1e2a3a';
const borderFocus = '#3b82f6';
const textPrimary = '#e8eaf0';
const textMuted = '#6b7a99';
const accentBlue = '#3b82f6';
const accentGreen = '#10b981';
const accentRed = '#ef4444';

const styles = {
  page: {
    background: darkBg,
    minHeight: '100vh',
    padding: '32px 24px',
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
    color: textPrimary,
  },
  card: {
    background: cardBg,
    border: `1px solid ${borderColor}`,
    borderRadius: '16px',
    padding: '28px 32px',
    maxWidth: '860px',
    margin: '0 auto',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '28px',
    paddingBottom: '20px',
    borderBottom: `1px solid ${borderColor}`,
  },
  title: {
    fontSize: '20px',
    fontWeight: 700,
    color: textPrimary,
    letterSpacing: '-0.02em',
  },
  badge: {
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.06em',
    background: '#1e2a3a',
    color: accentBlue,
    border: `1px solid ${borderColor}`,
    borderRadius: '6px',
    padding: '4px 10px',
  },
  section: {
    marginBottom: '24px',
  },
  sectionLabel: {
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.08em',
    color: textMuted,
    textTransform: 'uppercase',
    marginBottom: '14px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  sectionLine: {
    flex: 1,
    height: '1px',
    background: borderColor,
  },
  grid2: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '14px',
  },
  grid3: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '14px',
  },
  fieldGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '12px',
    fontWeight: 500,
    color: textMuted,
    letterSpacing: '0.02em',
  },
  input: {
    background: inputBg,
    border: `1px solid ${borderColor}`,
    borderRadius: '8px',
    padding: '10px 14px',
    fontSize: '14px',
    color: textPrimary,
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    transition: 'border-color 0.15s',
  },
  select: {
    background: inputBg,
    border: `1px solid ${borderColor}`,
    borderRadius: '8px',
    padding: '10px 14px',
    fontSize: '14px',
    color: textPrimary,
    outline: 'none',
    width: '100%',
    boxSizing: 'border-box',
    cursor: 'pointer',
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7a99' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 12px center',
  },
  articlesTable: {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '10px',
  },
  th: {
    fontSize: '11px',
    fontWeight: 600,
    color: textMuted,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    padding: '8px 10px',
    textAlign: 'left',
    borderBottom: `1px solid ${borderColor}`,
  },
  td: {
    padding: '6px 6px',
    verticalAlign: 'middle',
  },
  addRowBtn: {
    background: 'transparent',
    border: `1px dashed ${borderColor}`,
    borderRadius: '8px',
    color: textMuted,
    fontSize: '13px',
    padding: '9px 16px',
    cursor: 'pointer',
    width: '100%',
    textAlign: 'center',
    transition: 'all 0.15s',
    marginTop: '6px',
  },
  deleteBtn: {
    background: 'transparent',
    border: 'none',
    color: accentRed,
    cursor: 'pointer',
    fontSize: '16px',
    padding: '4px 8px',
    borderRadius: '6px',
    lineHeight: 1,
    opacity: 0.7,
  },
  totalsRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '24px',
    padding: '14px 0',
    borderTop: `1px solid ${borderColor}`,
    marginTop: '4px',
  },
  totalItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '2px',
  },
  totalLabel: {
    fontSize: '11px',
    color: textMuted,
    fontWeight: 500,
    letterSpacing: '0.04em',
  },
  totalValue: {
    fontSize: '16px',
    fontWeight: 700,
    color: textPrimary,
  },
  totalValueAccent: {
    fontSize: '18px',
    fontWeight: 700,
    color: accentBlue,
  },
  toggleWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px 16px',
    background: inputBg,
    border: `1px solid ${borderColor}`,
    borderRadius: '8px',
  },
  toggleLabel: {
    fontSize: '13px',
    color: textPrimary,
    flex: 1,
  },
  toggleSubLabel: {
    fontSize: '11px',
    color: textMuted,
  },
  footer: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '12px',
    paddingTop: '24px',
    borderTop: `1px solid ${borderColor}`,
    marginTop: '8px',
  },
  btnSecondary: {
    background: 'transparent',
    border: `1px solid ${borderColor}`,
    borderRadius: '9px',
    padding: '11px 24px',
    fontSize: '14px',
    color: textMuted,
    cursor: 'pointer',
    fontFamily: 'inherit',
    transition: 'all 0.15s',
  },
  btnPrimary: {
    background: accentBlue,
    border: 'none',
    borderRadius: '9px',
    padding: '11px 28px',
    fontSize: '14px',
    fontWeight: 600,
    color: '#fff',
    cursor: 'pointer',
    fontFamily: 'inherit',
    transition: 'all 0.15s',
  },
};

const TVA_RATE = 0.20;

export default function FactureForm({ clients = [], onSubmit }) {
  const [form, setForm] = useState({
    numero: '',
    date_creation: new Date().toISOString().split('T')[0],
    client_id: '',
    statut: 'en_attente',
    date_depot: '',
    date_encaissement: '',
    type_virement: '',
    validated_by_admin: false,
  });

  const [articles, setArticles] = useState([
    { description: '', quantite: 1, prix_unitaire: 0 },
  ]);

  const [focused, setFocused] = useState(null);

  const total_ht = articles.reduce((sum, a) => sum + (parseFloat(a.quantite) || 0) * (parseFloat(a.prix_unitaire) || 0), 0);
  const tva = total_ht * TVA_RATE;
  const total_ttc = total_ht + tva;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleArticleChange = (index, field, value) => {
    setArticles(prev => prev.map((a, i) => i === index ? { ...a, [field]: value } : a));
  };

  const addArticle = () => setArticles(prev => [...prev, { description: '', quantite: 1, prix_unitaire: 0 }]);

  const removeArticle = (index) => {
    if (articles.length > 1) setArticles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...form, articles, total_ht, tva, total_ttc };
    if (onSubmit) onSubmit(payload);
    else console.log('Facture:', payload);
  };

  const inputStyle = (name) => ({
    ...styles.input,
    borderColor: focused === name ? borderFocus : borderColor,
  });

  const fmt = (n) => n.toLocaleString('fr-FR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div style={styles.page}>
      <form onSubmit={handleSubmit} style={styles.card}>

        {/* Header */}
        <div style={styles.header}>
          <div>
            <div style={styles.title}>Nouvelle Facture</div>
            <div style={{ fontSize: 13, color: textMuted, marginTop: 4 }}>Remplissez les informations de la facture</div>
          </div>
          
        </div>

        {/* Section 1 — Informations générales */}
        <div style={styles.section}>
          <div style={styles.sectionLabel}>
            Informations générales
            <span style={styles.sectionLine}/>
          </div>
          <div style={styles.grid2}>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Numéro de facture</label>
              <input
                style={inputStyle('numero')}
                name="numero" value={form.numero}
                onChange={handleChange}
                onFocus={() => setFocused('numero')}
                onBlur={() => setFocused(null)}
                placeholder="FAC-001"
                required
              />
            </div>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Date de création</label>
              <input
                style={inputStyle('date_creation')}
                type="date" name="date_creation" value={form.date_creation}
                onChange={handleChange}
                onFocus={() => setFocused('date_creation')}
                onBlur={() => setFocused(null)}
                required
              />
            </div>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Client</label>
              <select
                style={{ ...styles.select, borderColor: focused === 'client_id' ? borderFocus : borderColor }}
                name="client_id" value={form.client_id}
                onChange={handleChange}
                onFocus={() => setFocused('client_id')}
                onBlur={() => setFocused(null)}
                required
              >
                <option value="">Sélectionner un client</option>
                {clients.length > 0
                  ? clients.map(c => <option key={c.id} value={c.id}>{c.nom}</option>)
                  : <option value="client_001">Mohamed Alami</option>
                }
              </select>
            </div>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Statut</label>
              <select
                style={{ ...styles.select, borderColor: focused === 'statut' ? borderFocus : borderColor }}
                name="statut" value={form.statut}
                onChange={handleChange}
                onFocus={() => setFocused('statut')}
                onBlur={() => setFocused(null)}
              >
                <option value="en_attente">En attente</option>
                <option value="deposee">Déposée</option>
                <option value="encaissee">Encaissée</option>
                <option value="annulee">Annulée</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 2 — Articles */}
        <div style={styles.section}>
          <div style={styles.sectionLabel}>
            Articles
            <span style={styles.sectionLine}/>
          </div>
          <table style={styles.articlesTable}>
            <thead>
              <tr>
                <th style={{ ...styles.th, width: '45%' }}>Description</th>
                <th style={{ ...styles.th, width: '15%' }}>Qté</th>
                <th style={{ ...styles.th, width: '20%' }}>Prix unitaire (DH)</th>
                <th style={{ ...styles.th, width: '15%' }}>Total</th>
                <th style={{ ...styles.th, width: '5%' }}></th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article, i) => (
                <tr key={i}>
                  <td style={styles.td}>
                    <input
                      style={{ ...styles.input, borderColor: focused === `desc_${i}` ? borderFocus : borderColor }}
                      value={article.description}
                      onChange={e => handleArticleChange(i, 'description', e.target.value)}
                      onFocus={() => setFocused(`desc_${i}`)}
                      onBlur={() => setFocused(null)}
                      placeholder="Prestation, produit..."
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={{ ...styles.input, borderColor: focused === `qty_${i}` ? borderFocus : borderColor, textAlign: 'center' }}
                      type="number" min="1" value={article.quantite}
                      onChange={e => handleArticleChange(i, 'quantite', e.target.value)}
                      onFocus={() => setFocused(`qty_${i}`)}
                      onBlur={() => setFocused(null)}
                    />
                  </td>
                  <td style={styles.td}>
                    <input
                      style={{ ...styles.input, borderColor: focused === `pu_${i}` ? borderFocus : borderColor, textAlign: 'right' }}
                      type="number" min="0" step="0.01" value={article.prix_unitaire}
                      onChange={e => handleArticleChange(i, 'prix_unitaire', e.target.value)}
                      onFocus={() => setFocused(`pu_${i}`)}
                      onBlur={() => setFocused(null)}
                    />
                  </td>
                  <td style={{ ...styles.td, fontSize: 14, color: textPrimary, fontWeight: 600, textAlign: 'right', paddingRight: 12 }}>
                    {fmt((parseFloat(article.quantite) || 0) * (parseFloat(article.prix_unitaire) || 0))}
                  </td>
                  <td style={styles.td}>
                    <button type="button" style={styles.deleteBtn} onClick={() => removeArticle(i)}>✕</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" style={styles.addRowBtn} onClick={addArticle}>
            + Ajouter un article
          </button>

          {/* Totals */}
          <div style={styles.totalsRow}>
            <div style={styles.totalItem}>
              <span style={styles.totalLabel}>TOTAL HT</span>
              <span style={styles.totalValue}>{fmt(total_ht)} DH</span>
            </div>
            <div style={styles.totalItem}>
              <span style={styles.totalLabel}>TVA (20%)</span>
              <span style={styles.totalValue}>{fmt(tva)} DH</span>
            </div>
            <div style={styles.totalItem}>
              <span style={styles.totalLabel}>TOTAL TTC</span>
              <span style={styles.totalValueAccent}>{fmt(total_ttc)} DH</span>
            </div>
          </div>
        </div>

        {/* Section 3 — Paiement */}
        <div style={styles.section}>
          <div style={styles.sectionLabel}>
            Paiement & Virement
            <span style={styles.sectionLine}/>
          </div>
          <div style={styles.grid3}>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Date de dépôt</label>
              <input
                style={inputStyle('date_depot')}
                type="date" name="date_depot" value={form.date_depot}
                onChange={handleChange}
                onFocus={() => setFocused('date_depot')}
                onBlur={() => setFocused(null)}
              />
            </div>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Date d'encaissement</label>
              <input
                style={inputStyle('date_encaissement')}
                type="date" name="date_encaissement" value={form.date_encaissement}
                onChange={handleChange}
                onFocus={() => setFocused('date_encaissement')}
                onBlur={() => setFocused(null)}
              />
            </div>
            <div style={styles.fieldGroup}>
              <label style={styles.label}>Type de virement</label>
              <select
                style={{ ...styles.select, borderColor: focused === 'type_virement' ? borderFocus : borderColor }}
                name="type_virement" value={form.type_virement}
                onChange={handleChange}
                onFocus={() => setFocused('type_virement')}
                onBlur={() => setFocused(null)}
              >
                <option value="">Sélectionner</option>
                <option value="virement_bancaire">Virement bancaire</option>
                <option value="cheque">Chèque</option>
                <option value="especes">Espèces</option>
                <option value="carte">Carte bancaire</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 4 — Validation admin */}
        <div style={styles.section}>
          <div style={styles.sectionLabel}>
            Administration
            <span style={styles.sectionLine}/>
          </div>
          <div style={styles.toggleWrapper}>
            <div>
              <div style={styles.toggleLabel}>Validée par l'administrateur</div>
              <div style={styles.toggleSubLabel}>Cocher si la facture a été vérifiée et approuvée</div>
            </div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input
                type="checkbox"
                name="validated_by_admin"
                checked={form.validated_by_admin}
                onChange={handleChange}
                style={{ width: 16, height: 16, accentColor: accentBlue, cursor: 'pointer' }}
              />
              <span style={{ fontSize: 13, color: form.validated_by_admin ? accentGreen : textMuted, fontWeight: 500 }}>
                {form.validated_by_admin ? 'Validée' : 'Non validée'}
              </span>
            </label>
          </div>
        </div>

        {/* Footer */}
        <div style={styles.footer}>
          <button type="button" style={styles.btnSecondary}>Annuler</button>
          <button type="submit" style={styles.btnPrimary}>Enregistrer la facture</button>
        </div>

      </form>
    </div>
  );
}