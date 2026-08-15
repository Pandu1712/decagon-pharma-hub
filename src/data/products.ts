export type CategorySlug =
  | "diabetic-care"
  | "pain-orthopedic-care"
  | "gastro-care"
  | "vitamins-supplements"
  | "neurological-care"
  | "cardiovascular-care"
  | "anti-infective"
  | "dermatology"
  | "womens-health"
  | "general-healthcare";

export type Category = {
  slug: CategorySlug;
  name: string;
  short: string;
  accent: "blue" | "purple" | "teal" | "amber" | "orange";
};

export const categories: Category[] = [
  { slug: "diabetic-care", name: "Diabetic Care", short: "Anti-diabetic combinations", accent: "blue" },
  { slug: "pain-orthopedic-care", name: "Pain & Orthopedic Care", short: "Analgesic & musculoskeletal range", accent: "purple" },
  { slug: "gastro-care", name: "Gastro Care", short: "Acid control & gastro solutions", accent: "orange" },
  { slug: "vitamins-supplements", name: "Vitamins & Supplements", short: "Nutrition & wellness support", accent: "teal" },
  { slug: "neurological-care", name: "Neurological Care", short: "Neuropathic care range", accent: "purple" },
  { slug: "cardiovascular-care", name: "Cardiovascular Care", short: "Antihypertensive range", accent: "blue" },
  { slug: "anti-infective", name: "Anti-Infective", short: "Antibacterial solutions", accent: "teal" },
  { slug: "dermatology", name: "Dermatology", short: "Skin & scalp care", accent: "amber" },
  { slug: "womens-health", name: "Women's Health", short: "Care for women", accent: "purple" },
  { slug: "general-healthcare", name: "General Healthcare", short: "Everyday healthcare needs", accent: "orange" },
];

export type Product = {
  slug: string;
  name: string;
  composition: string;
  form: string;
  category: CategorySlug;
  featured?: boolean;
  packaging?: string;
};

const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const raw: Omit<Product, "slug">[] = [
  // 1. Diabetic Care
  { name: "DECAGLIM-M1", composition: "Glimepiride 1 mg + Metformin Hydrochloride SR 500 mg", form: "Tablet", category: "diabetic-care", featured: true },
  { name: "DECAGLIM-M2", composition: "Glimepiride 2 mg + Metformin Hydrochloride ER 500 mg", form: "Tablets", category: "diabetic-care" },
  { name: "DECAGLIM-MV1", composition: "Glimepiride 1 mg + Metformin 500 mg SR + Voglibose 0.2 mg", form: "Tablet", category: "diabetic-care" },
  { name: "DECAGLIM-MV2", composition: "Glimepiride 2 mg + Metformin 500 mg SR + Voglibose 0.2 mg", form: "Tablet", category: "diabetic-care" },

  // 2. Pain & Orthopedic Care
  { name: "XINAC-P", composition: "Aceclofenac 100 mg + Paracetamol 325 mg", form: "Tablets", category: "pain-orthopedic-care", featured: true },
  { name: "XINAC-SP", composition: "Aceclofenac 100 mg + Paracetamol 325 mg + Serratiopeptidase 15 mg", form: "Tablets", category: "pain-orthopedic-care" },
  { name: "XINAC-MR", composition: "Aceclofenac 100 mg + Paracetamol 325 mg + Chlorzoxazone 250 mg", form: "Tablets", category: "pain-orthopedic-care" },
  { name: "XINAC-TH 4", composition: "Aceclofenac 100 mg + Thiocolchicoside 4 mg", form: "Tablet", category: "pain-orthopedic-care" },
  { name: "XINAC-TH 8", composition: "Aceclofenac 100 mg + Thiocolchicoside 8 mg", form: "Tablet", category: "pain-orthopedic-care" },
  { name: "XINAC-PTC", composition: "Aceclofenac 100 mg + Paracetamol 325 mg + Trypsin Chymotrypsin 150000 AU", form: "Tablet", category: "pain-orthopedic-care" },
  { name: "XINAC-Gel", composition: "Oleum Lini + Diclofenac Diethylamine + Methyl Salicylate + Menthol", form: "Gel", category: "pain-orthopedic-care" },
  { name: "FLUPNAC-P", composition: "Flupirtine Maleate 100 mg + Paracetamol 325 mg", form: "Tablets", category: "pain-orthopedic-care" },
  { name: "Naprofit D 500", composition: "Domperidone + Naproxen Sodium", form: "Tablets", category: "pain-orthopedic-care" },

  // 3. Calcium & Bone Health / 4. Vitamins, Minerals & Nutritional Supplements
  { name: "CALZIUM", composition: "Calcium Citrate 1000 mg + Vitamin D3 1000 IU + Magnesium 100 mg + Zinc 4 mg", form: "Tablet", category: "vitamins-supplements", featured: true },
  { name: "CALZIUM-D3 NANO", composition: "Cholecalciferol I.P. 60000 IU", form: "Oral Solution", category: "vitamins-supplements" },
  { name: "CALZIUM TOTAL", composition: "Calcitriol + Calcium Citrate + Methylcobalamin + Vitamin K2-7 + L-Methyl Folate + Zinc + Magnesium", form: "Soft Gelatin Capsules", category: "vitamins-supplements" },
  { name: "DECOVIT TAB", composition: "Lycopene, Lutein, Beta Carotene, Vitamin D3, B6, B12, Niacinamide, Folic Acid, Biotin, Ferrous Fumarate, Lysine & Multimineral", form: "Tablets", category: "vitamins-supplements", featured: true },
  { name: "DECOVIT SYP", composition: "L-Lysine + Multivitamin & Multimineral", form: "Syrup", category: "vitamins-supplements" },
  { name: "DECOVIT PLUS", composition: "Mecobalamin 1500 mcg + Pyridoxine HCl 100 mg + Nicotinamide 100 mg + Benzyl Alcohol 2% w/v", form: "Injection", category: "vitamins-supplements" },
  { name: "DECOFER CAP", composition: "Ferrous Ascorbate + Folic Acid + Zinc Sulphate Monohydrate", form: "Soft Gelatin Capsules", category: "vitamins-supplements" },
  { name: "DECOFER SYP", composition: "Ferrous Ascorbate 30 mg + Folic Acid 0.5 mg", form: "Syrup", category: "vitamins-supplements" },
  { name: "L-WIN", composition: "L-Arginine + Vitamin C + Vitamin E + Vitamin B6 + Folic Acid + Vitamin B12 + Zinc Nano Shots", form: "Nano Shots", category: "vitamins-supplements" },
  { name: "Q10 OMEGA PLUS", composition: "Co-enzyme Q10 100 mg + Lycopene 4000 mcg + L-Arginine 100 mg + Omega-3 Fatty Acid + Probiotic 500 mg + Eicosapentaenoic Acid 90 mg + Docosahexaenoic Acid 60 mg + Selenium 70 mcg", form: "Soft Gelatin Capsules", category: "vitamins-supplements" },
  { name: "Fertile Fem", composition: "Astaxanthin 8 mg + L-Arginine 50 mg + Lycopene 5 mg + Vitamin A 600 mcg + Vitamin B1 1.1 mg + Vitamin B2 1.4 mg + Vitamin B6 1.4 mg + Vitamin B12 2.5 mcg + Vitamin C 40 mg + Vitamin E 12 mg + Vitamin D3 400 IU + Niacin 18 mg + Folic Acid 117 mcg + Iodine 100 mcg + Magnesium 50 mg + Copper 0.7 mg + Selenium 35 mcg + Zinc 10 mg", form: "Softgel Capsule", category: "vitamins-supplements" },
  { name: "Hairwiz Advance", composition: "Urtica Dioica Extract, Equisetum Arvense, Grape Seed Extract, Wheat Germ, Millet Extract, Amino Acids with Vitamins and Minerals", form: "Tablets", category: "vitamins-supplements" },
  { name: "SALVOFLEX-UC", composition: "Rosehip Extract 500 mg + Collagen Peptide Type-2 240 mg + Sodium Hyaluronate 30 mg + Chondroitin Sulphate 200 mg + Vitamin C (Ascorbic Acid) 35 mg + Boswelliaserrata 100 mg", form: "Softgel Capsules", category: "vitamins-supplements" },

  // 5. Digestive / Gastro Care
  { name: "ESMEPRO-40", composition: "Esomeprazole Magnesium Gastro Resistant 40 mg", form: "Tablets", category: "gastro-care", featured: true },
  { name: "ESMEPRO-DSR", composition: "Esomeprazole 40 mg (EC) + Domperidone 30 mg (SR)", form: "Capsules", category: "gastro-care" },
  { name: "ESMEPRO-L", composition: "Esomeprazole 40 mg (EC) + Levosulpiride 75 mg (SR)", form: "Capsules", category: "gastro-care" },
  { name: "Sumace-O", composition: "Sucralfate 1 gm + Oxetacaine 20 mg", form: "Syrup — 200 ml", category: "gastro-care" },
  { name: "CYDON", composition: "Cyproheptadine HCl 2 mg + Tricholine Citrate 275 mg", form: "Syrup", category: "gastro-care" },

  // 6. Enzymes / Anti-inflammatory
  { name: "BROMZER", composition: "Trypsin 48 mg + Bromelain 90 mg + Rutoside Trihydrate 100 mg", form: "Enteric Coated Tablets", category: "general-healthcare" },
  { name: "BROMZER-A", composition: "Trypsin 48 mg + Bromelain 90 mg + Rutoside Trihydrate 100 mg + Aceclofenac 100 mg", form: "Enteric Coated Tablets", category: "general-healthcare" },

  // 7. Neurological / Nerve Care
  { name: "DECAGABA NT", composition: "Gabapentin + Nortriptyline Hydrochloride", form: "Tablets", category: "neurological-care" },
  { name: "DECAGABA NT 100", composition: "Gabapentin + Nortriptyline Hydrochloride", form: "Tablets", category: "neurological-care" },
  { name: "PRIGAVIN-M", composition: "Pregabalin 75 mg + Methylcobalamin 1500 mcg", form: "Tablet", category: "neurological-care", featured: true },

  // 8. Dermatology / Topical Care
  { name: "LUZOTUF Cream", composition: "Luliconazole 1% w/w", form: "Cream", category: "dermatology" },
  { name: "LUZOTUF Shampoo", composition: "Luliconazole 1% w/v + Salicylic Acid 3% w/v + Zinc Pyrithione (ZPTO) 1% w/v", form: "Shampoo", category: "dermatology" },
  { name: "Ketofex", composition: "Ketoconazole 2.0% + Cetrimide 0.5%", form: "Soap", category: "dermatology" },

  // 9. Cardiovascular / Hypertension
  { name: "TISARTIN-40", composition: "Telmisartan 40 mg", form: "Tablet", category: "cardiovascular-care", featured: true },
  { name: "TISARTIN-H", composition: "Telmisartan 40 mg + Hydrochlorothiazide 12.5 mg", form: "Tablets", category: "cardiovascular-care" },
  { name: "TISARTIN-TRIO", composition: "Telmisartan 40 mg + Amlodipine 5 mg + Hydrochlorothiazide 12.5 mg", form: "Tablet", category: "cardiovascular-care" },

  // 10. Anti-infective
  { name: "DECACLAV-625", composition: "Amoxycillin 500 mg + Clavulanate Potassium 125 mg", form: "Tablets", category: "anti-infective", featured: true },
  { name: "NITRUF", composition: "Nitrofurantoin 100 mg SR", form: "Tablet", category: "anti-infective" },

  // 11. Urinary / Women's Health
  { name: "URINAR", composition: "Cranberry Extract 200 mg + D-Mannose 300 mg + Potassium Magnesium Citrate 978 mg", form: "Syrup", category: "womens-health" },
  { name: "COSYWASH", composition: "Hygiene Wash for Women", form: "Hygiene Wash", category: "womens-health" },
  { name: "Myo n-Insta", composition: "Myo-Inositol 1100 mg + D-Chiro-Inositol 27.6 mg + Chromium Picolinate 400 mcg + Vitamin D3 400 IU", form: "Tablets", category: "womens-health", featured: true },
  { name: "HISTIZEN 8/16/24/32/48", composition: "Betahistine 8 mg / 16 mg / 24 mg / 32 mg / 48 mg", form: "Tablets", category: "general-healthcare" },

  // 12. Allergy / Respiratory & 13. Other Products
  { name: "XELIV", composition: "Levocetirizine Dihydrochloride 5 mg + Montelukast Sodium 10 mg", form: "Tablets", category: "general-healthcare", featured: true },
  { name: "DEFJART", composition: "Deflazacort 6 mg", form: "Tablet", category: "general-healthcare" },
];

export const products: Product[] = raw.map((p) => ({ ...p, slug: slugify(p.name) }));

export const getCategory = (slug: CategorySlug) =>
  categories.find((c) => c.slug === slug)!;

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const featuredProducts = products.filter((p) => p.featured);

export const countByCategory = (slug: CategorySlug) =>
  products.filter((p) => p.category === slug).length;
