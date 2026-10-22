import decaglimM2Img from "@/assets/product 1.jpeg";
import calziumD3NanoImg from "@/assets/product 2.jpeg";
import xinacTh8Img from "@/assets/product 3.jpeg";
import decoferCapImg from "@/assets/product 5.jpeg";

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
  image?: string;
};

export const categories: Category[] = [
  { slug: "diabetic-care", name: "Diabetic Care", short: "Anti-diabetic combinations", accent: "blue", image: "/categories/diabetic-care.jpg" },
  { slug: "pain-orthopedic-care", name: "Pain & Orthopedic Care", short: "Analgesic & musculoskeletal range", accent: "purple", image: "/categories/pain-orthopedic-care.jpg" },
  { slug: "gastro-care", name: "Gastro Care", short: "Acid control & gastro solutions", accent: "orange", image: "/categories/gastro-care.jpg" },
  { slug: "vitamins-supplements", name: "Vitamins & Supplements", short: "Nutrition & wellness support", accent: "teal", image: "/categories/vitamins-supplements.jpg" },
  { slug: "neurological-care", name: "Neurological Care", short: "Neuropathic care range", accent: "purple", image: "/categories/neurological-care.jpg" },
  { slug: "cardiovascular-care", name: "Cardiovascular Care", short: "Antihypertensive range", accent: "blue", image: "/categories/cardiovascular-care.jpg" },
  { slug: "anti-infective", name: "Anti-Infective", short: "Antibacterial solutions", accent: "teal", image: "/categories/anti-infective.jpg" },
  { slug: "dermatology", name: "Dermatology", short: "Skin & scalp care", accent: "amber", image: "/categories/dermatology.jpg" },
  { slug: "womens-health", name: "Women's Health", short: "Care for women", accent: "purple", image: "/categories/womens-health.jpg" },
  { slug: "general-healthcare", name: "General Healthcare", short: "Everyday healthcare needs", accent: "orange", image: "/categories/general-healthcare.jpg" },
];

export type ProductDetailInfo = {
  overview: string;
  targetAudience: string;
  keyFeatures: {
    title: string;
    description: string;
  }[];
  compositionList: {
    ingredient: string;
    strength: string;
    role?: string;
  }[];
  keyBenefits: string[];
  moleculeBenefits: {
    molecule: string;
    strength?: string;
    points: string[];
  }[];
  recommendedUsage: {
    dosage: string;
    administration: string;
    duration?: string;
    precautions?: string;
  };
  pregnancyLactation?: {
    overview: string;
    pregnancyBenefits: string[];
    lactationBenefits: string[];
    usageNote: string;
    guidelines?: { population: string; intake: string }[];
    references?: {
      source: string;
      title: string;
      description?: string;
      url?: string;
    }[];
    marketingStatement?: string;
  };
  scientificClaim?: string;
  clinicalNote?: string;
  disclaimer: string;
};

export type Product = {
  slug: string;
  name: string;
  composition: string;
  form: string;
  category: CategorySlug;
  featured?: boolean;
  packaging?: string;
  image?: string;
  details?: ProductDetailInfo;
};

const slugify = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

const salvoflexUcDetails: ProductDetailInfo = {
  overview:
    "SALVOFLEX-UC is an advanced joint care nutraceutical scientifically formulated to support cartilage regeneration, joint lubrication, pain relief, and improved mobility. It combines the synergistic benefits of Rosehip Extract, Undenatured Collagen Type II (UC-II®), Chondroitin Sulphate, Sodium Hyaluronate, Boswellia serrata, and Vitamin C to help manage osteoarthritis, support healthy joints, and promote long-term joint function.",
  targetAudience:
    "Designed for individuals with joint pain, stiffness, cartilage degeneration, or reduced mobility, SALVOFLEX-UC provides comprehensive nutritional support for stronger, healthier joints.",
  keyFeatures: [
    {
      title: "Comprehensive Joint Care",
      description: "Targets pain, inflammation, cartilage protection, and joint lubrication in one capsule.",
    },
    {
      title: "Supports Cartilage Regeneration",
      description: "Provides essential nutrients that help rebuild and preserve healthy cartilage.",
    },
    {
      title: "Reduces Pain & Inflammation",
      description: "Natural anti-inflammatory ingredients help improve comfort and mobility.",
    },
    {
      title: "Improves Joint Flexibility",
      description: "Enhances lubrication and reduces stiffness for smoother joint movement.",
    },
    {
      title: "Scientifically Selected Ingredients",
      description: "A premium combination of clinically studied ingredients for long-term joint health.",
    },
    {
      title: "Suitable for Long-Term Joint Wellness",
      description: "Helps maintain healthy joints in aging individuals, active adults, and patients with osteoarthritis.",
    },
  ],
  compositionList: [
    {
      ingredient: "Rosehip Extract",
      strength: "500 mg",
      role: "Helps reduce pain and inflammation; effective in relieving OA & RA symptoms",
    },
    {
      ingredient: "Undenatured Collagen Type II (UC-II® / Peptide Type-2)",
      strength: "240 mg / 40 mg",
      role: "Powerful immunomodulator that reduces inflammation and breaks the destructive cycle of collagen breakdown",
    },
    {
      ingredient: "Chondroitin Sulphate",
      strength: "200 mg",
      role: "Provides building blocks to produce new cartilage & improves function in symptomatic OA",
    },
    {
      ingredient: "Sodium Hyaluronate",
      strength: "30 mg",
      role: "Repairs compromised moisture barrier & restores synovial lubrication",
    },
    {
      ingredient: "Boswellia serrata",
      strength: "100 mg",
      role: "Offers significant reductions in pain & improvements in physical function",
    },
    {
      ingredient: "Vitamin C (Ascorbic Acid)",
      strength: "35 mg",
      role: "Beneficial in the endogenous synthesis of collagen and tissue repair",
    },
  ],
  keyBenefits: [
    "Say goodbye to joint pain — effectively helps relieve pain and inflammation",
    "Inhibits enzymes responsible for inflammation, aiding in reducing joint discomfort and rigidity",
    "Effective for osteoarthritis and rheumatoid arthritis, helping increase flexibility and mobility",
    "Stops cartilage erosion and aids in actively repairing and rebuilding cartilage",
    "Provides complete nutritional support for weak and brittle cartilages and joints",
    "Improves overall bone and joint health with long-term safety profile",
  ],
  moleculeBenefits: [
    {
      molecule: "Rosehip Extract",
      strength: "500 mg",
      points: [
        "Rich in galactolipids that inhibit inflammatory cytokine release",
        "Helps reduce pain and stiffness associated with rheumatoid arthritis and osteoarthritis",
        "Protects joint tissues against free radical oxidative degradation",
      ],
    },
    {
      molecule: "Undenatured Collagen Type II",
      strength: "UC-II® / Peptide Type-2",
      points: [
        "Acts as an oral immunomodulator to halt T-cell-mediated articular cartilage attack",
        "Breaks the destructive cycle of collagen degradation and preserves joint space",
        "Improves joint extension, flexibility, and physical mobility",
      ],
    },
    {
      molecule: "Sodium Hyaluronate + Chondroitin Sulphate",
      strength: "30 mg / 200 mg",
      points: [
        "Sodium Hyaluronate restores synovial fluid viscosity, eliminating bone-on-bone friction",
        "Chondroitin Sulphate supplies essential glycosaminoglycan building blocks for de novo cartilage synthesis",
      ],
    },
    {
      molecule: "Boswellia serrata + Vitamin C",
      strength: "100 mg / 35 mg",
      points: [
        "Boswellia serrata specifically inhibits 5-LOX inflammatory enzyme, delivering rapid comfort",
        "Vitamin C serves as a mandatory enzymatic cofactor for procollagen proline and lysine hydroxylation",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 softgel capsule daily after a meal, or as directed by an orthopedist / physician",
    administration: "Swallow whole with water, preferably after a meal. Consistent daily intake is recommended.",
    duration: "Recommended for regular, consistent use to support cartilage repair and long-term joint function.",
    precautions: "Consult a healthcare professional prior to use if pregnant, nursing, or undergoing treatment. Not for medicinal use.",
  },
  scientificClaim:
    "Say Goodbye to Joint Pain — Helps Relieve Pain & Inflammation.",
  clinicalNote:
    "Inhibits the enzymes responsible for inflammation in the body, aids in repairing and rebuilding cartilage, stops cartilage erosion, and improves physical mobility in osteoarthritis and rheumatoid arthritis.",
  disclaimer:
    "SALVOFLEX-UC is a nutraceutical joint health supplement. It is not intended to diagnose, treat, cure, or prevent any disease. Use under the guidance of a healthcare professional.",
};

const xinacPDetails: ProductDetailInfo = {
  overview:
    "XINAC-P Tablets combine Aceclofenac (100 mg) and Paracetamol (325 mg) to eliminate barriers and enhance pain relief. Aceclofenac offers new-age NSAID efficacy and safety, synergized with the universally accepted analgesic and antipyretic action of Paracetamol.",
  targetAudience:
    "Indicated for osteoarthritis, rheumatoid arthritis, breast engorgement, and the comprehensive management of acute pain and inflammation.",
  keyFeatures: [
    {
      title: "Eliminates Barriers, Enhances Relief",
      description:
        "Synergistic NSAID and analgesic pairing delivering fast onset and prolonged relief across musculoskeletal pain.",
    },
    {
      title: "New-Age NSAID Profile",
      description:
        "Aceclofenac is the new-age NSAID known for excellent clinical efficacy and high safety profile.",
    },
    {
      title: "Universally Accepted Analgesic",
      description:
        "Paracetamol provides reliable analgesic and antipyretic relief without irritating the lining of the stomach.",
    },
    {
      title: "Targeted Anti-Inflammatory Efficacy",
      description:
        "Selectively suppresses prostaglandin synthesis at the site of inflammation to restore physical mobility.",
    },
  ],
  compositionList: [
    {
      ingredient: "Aceclofenac",
      strength: "100 mg",
      role: "The new-age NSAID known for excellent efficacy and safety profile",
    },
    {
      ingredient: "Paracetamol",
      strength: "325 mg",
      role: "The universally accepted analgesic and antipyretic",
    },
  ],
  keyBenefits: [
    "Eliminates barriers, enhances relief across acute and chronic inflammatory pain",
    "New-age NSAID combination known for excellent clinical efficacy and safety",
    "Effective in osteoarthritis, rheumatoid arthritis, and pain management",
    "Proven clinical relief in acute postpartum breast engorgement discomfort",
    "High gastric tolerability with minimal gastrointestinal side-effects",
  ],
  moleculeBenefits: [
    {
      molecule: "Aceclofenac",
      strength: "100 mg",
      points: [
        "The new-age NSAID known for excellent efficacy & safety in musculoskeletal conditions",
        "Selectively targets COX-2 and inflammatory cytokines (IL-1beta, TNF-alpha)",
        "Demonstrates superior chondroprotection and gastric tolerability compared to traditional NSAIDs",
      ],
    },
    {
      molecule: "Paracetamol",
      strength: "325 mg",
      points: [
        "The universally accepted analgesic and antipyretic",
        "Does not irritate the lining of the stomach",
        "Useful in managing pain, allowing lower dosages of additional NSAIDs to minimize side-effects",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 tablet twice daily after meals, or as directed by a physician",
    administration: "Swallow whole with water after meals to ensure optimal gastric comfort.",
    duration: "Shortest duration necessary to control symptoms as advised by a doctor.",
    precautions: "Prescription medication. Avoid concurrent use with other paracetamol-containing products.",
  },
  scientificClaim:
    "XINAC-P — Eliminates Barriers, Enhances Relief.",
  clinicalNote:
    "Key Indications: Osteoarthritis, Rheumatoid Arthritis, Breast Engorgement, and Management of Pain & Inflammation.",
  disclaimer:
    "XINAC-P is a prescription analgesic and anti-inflammatory medication. Use strictly under the guidance of a qualified healthcare professional.",
};

const xinacSpDetails: ProductDetailInfo = {
  overview:
    "XINAC-SP Tablets combine Aceclofenac (100 mg), Paracetamol (325 mg), and Serratiopeptidase (15 mg) for ace performance in pain relief. Formulated to resolve intense pain and inflammation, clean up inflammatory debris, normalize localized temperature, and provide superior relief with excellent gastro-protection.",
  targetAudience:
    "Indicated for severe inflammatory pain, post-operative and post-traumatic edema, bone and joint inflammation, sports injuries, and surgical wound recovery.",
  keyFeatures: [
    {
      title: "For Ace Performance in Pain Relief",
      description:
        "Triple-action synergy combining selective anti-inflammatory, central analgesic, and proteolytic enzyme actions.",
    },
    {
      title: "Statistically Superior Efficacy",
      description:
        "Aceclofenac is statistically superior to diclofenac in efficacy parameters for pain and inflammation control.",
    },
    {
      title: "Cleans Up Inflammatory Site",
      description:
        "Serratiopeptidase cleans up the site of inflammation and normalizes the temperature of the inflamed area.",
    },
    {
      title: "Excellent Gastro-Protection",
      description:
        "Paracetamol does not irritate the stomach lining, allowing lower NSAID dosages and minimizing overall side-effects.",
    },
  ],
  compositionList: [
    {
      ingredient: "Aceclofenac",
      strength: "100 mg",
      role: "Potent analgesic & anti-inflammatory; statistically superior to diclofenac in efficacy parameters",
    },
    {
      ingredient: "Paracetamol",
      strength: "325 mg",
      role: "Universally accepted analgesic; does not irritate stomach lining & minimizes NSAID side-effects",
    },
    {
      ingredient: "Serratiopeptidase",
      strength: "15 mg",
      role: "Proteolytic enzyme; cleans up site of inflammation & normalizes tissue temperature",
    },
  ],
  keyBenefits: [
    "Ace performance in pain relief with rapid reduction of inflammation and swelling",
    "Aceclofenac is statistically superior to diclofenac in efficacy parameters",
    "Serratiopeptidase cleans up the site of inflammation and normalizes temperature of inflamed area",
    "Relieves pain and inflammation with excellent gastro protection",
    "Paracetamol allows lower NSAID dosages, minimizing overall adverse effects",
    "Accelerates healing in post-operative, traumatic, and musculoskeletal inflammation",
  ],
  moleculeBenefits: [
    {
      molecule: "Aceclofenac",
      strength: "100 mg",
      points: [
        "An effective analgesic, anti-inflammatory drug that is a valuable therapeutic option for controlling pain and inflammation",
        "Statistically superior to diclofenac in efficacy parameters",
        "Provides high chondroprotection and superior gastric tolerability",
      ],
    },
    {
      molecule: "Paracetamol",
      strength: "325 mg",
      points: [
        "Widely accepted drug & does not irritate the lining of the stomach",
        "Useful in managing more severe pain, allowing lower dosages of additional NSAIDs to be used, thereby minimizing overall side-effects",
      ],
    },
    {
      molecule: "Serratiopeptidase",
      strength: "15 mg",
      points: [
        "Cleans up site of inflammation and normalizes temperature of inflamed area",
        "Relieves pain and inflammation with excellent gastro protection",
        "Breaks down inflammatory exudates and enhances antibiotic/tissue penetration",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 tablet twice daily after meals, or as prescribed by a doctor",
    administration: "Swallow whole with a full glass of water after food. Do not chew or crush.",
    duration: "Short-term treatment of acute inflammatory pain or post-operative edema.",
    precautions: "Prescription medication. Contraindicated in severe liver or renal impairment.",
  },
  scientificClaim:
    "XINAC-SP — For Ace Performance in Pain Relief.",
  clinicalNote:
    "Indications: Severe post-traumatic and post-operative inflammation, painful osteoarthritis, rheumatoid arthritis, and localized soft-tissue edema.",
  disclaimer:
    "XINAC-SP is a prescription enzyme-NSAID combination. Use strictly under medical guidance.",
};

const xinacMrDetails: ProductDetailInfo = {
  overview:
    "XINAC-MR Tablets combine Aceclofenac (100 mg), Paracetamol (325 mg), and Chlorzoxazone (250 mg) for comprehensive, fast-acting relief from acute, painful musculoskeletal conditions associated with muscle spasms.",
  targetAudience:
    "Indicated for acute muscle spasms, lumbago (low back pain), torticollis, sprains, strains, and painful musculoskeletal rigidity.",
  keyFeatures: [
    {
      title: "Triple Spasm-Pain Relief",
      description:
        "Combines anti-inflammatory Aceclofenac, analgesic Paracetamol, and centrally acting muscle relaxant Chlorzoxazone.",
    },
    {
      title: "Breaks Spasm-Pain-Spasm Cycle",
      description:
        "Inhibits multi-synaptic reflex arcs in the spinal cord to quickly relieve muscle contractures and stiffness.",
    },
    {
      title: "Restores Range of Motion",
      description:
        "Rapidly reduces pain and muscle rigidity, allowing patients to resume normal physical mobility sooner.",
    },
  ],
  compositionList: [
    {
      ingredient: "Aceclofenac",
      strength: "100 mg",
      role: "The new-age NSAID relieving pain and inflammation at the affected muscle site",
    },
    {
      ingredient: "Paracetamol",
      strength: "325 mg",
      role: "Universally accepted analgesic; fast pain relief without irritating stomach lining",
    },
    {
      ingredient: "Chlorzoxazone",
      strength: "250 mg",
      role: "Centrally acting skeletal muscle relaxant relieving painful spasms and rigidity",
    },
  ],
  keyBenefits: [
    "Rapid relief from acute painful muscle spasms and back stiffness",
    "Breaks the debilitating spasm-pain-spasm cycle effectively",
    "Restores physical mobility and ease of movement in musculoskeletal injuries",
    "High tolerability with reliable gastric comfort",
  ],
  moleculeBenefits: [
    {
      molecule: "Chlorzoxazone",
      strength: "250 mg",
      points: [
        "Acts on the spinal cord and subcortical areas of the brain to inhibit polysynaptic reflex arcs",
        "Decreases skeletal muscle spasm and tone without loss of voluntary motor function",
      ],
    },
    {
      molecule: "Aceclofenac + Paracetamol",
      strength: "100 mg + 325 mg",
      points: [
        "Suppresses inflammatory prostaglandins at the injured myofascial tissue",
        "Provides fast and sustained pain relief with high gastric safety",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 tablet twice daily after meals, or as directed by an orthopedic doctor",
    administration: "Swallow whole with a full glass of water after food.",
    duration: "Short-term therapy (typically 3 to 7 days) during acute muscle spasm phase.",
    precautions: "May cause mild drowsiness. Avoid driving or operating heavy machinery during use.",
  },
  scientificClaim:
    "XINAC-MR — Fast Relief from Painful Muscle Spasms & Back Pain.",
  clinicalNote:
    "Indications: Acute muscle spasm, lower back pain (lumbago), torticollis, sprains, strains, and myositis.",
  disclaimer:
    "XINAC-MR is a prescription muscle relaxant and analgesic combination. Use under medical guidance.",
};

const xinacGelDetails: ProductDetailInfo = {
  overview:
    "XINAC Gel is a topical analgesic and anti-inflammatory gel formulated with Oleum Lini, Diclofenac Diethylamine, Methyl Salicylate, and Menthol. Scientifically designed for deep tissue penetration to provide rapid, localized pain relief directly at the site of joint and muscle injury.",
  targetAudience:
    "Indicated for acute sprains, strains, joint pain, backache, neck pain, tendonitis, osteoarthritis, and sports injuries.",
  keyFeatures: [
    {
      title: "Deep Penetration Technology",
      description:
        "Oleum Lini and Menthol act as natural penetration enhancers, allowing Diclofenac to reach deep synovial and muscle layers rapidly.",
    },
    {
      title: "Instant Cooling & Soothing Action",
      description:
        "Menthol provides an immediate cooling sensation that desensitizes pain receptors, followed by soothing warmth from Methyl Salicylate.",
    },
    {
      title: "Targeted Anti-Inflammatory Action",
      description:
        "Diclofenac Diethylamine directly blocks local COX enzymes, reducing inflammation, swelling, and localized tenderness.",
    },
  ],
  compositionList: [
    {
      ingredient: "Diclofenac Diethylamine",
      strength: "1.16% w/w",
      role: "Potent topical NSAID reducing localized joint and muscle inflammation",
    },
    {
      ingredient: "Oleum Lini (Flaxseed Oil)",
      strength: "3.00% w/w",
      role: "Rich in omega-3 alpha-linolenic acid; accelerates deep transdermal drug delivery",
    },
    {
      ingredient: "Methyl Salicylate",
      strength: "10.0% w/w",
      role: "Counter-irritant increasing local microcirculation and easing stiffness",
    },
    {
      ingredient: "Menthol",
      strength: "5.00% w/w",
      role: "Produces refreshing cooling effect, desensitizing local sensory nerve endings",
    },
  ],
  keyBenefits: [
    "Rapid targeted relief directly at the site of pain and inflammation",
    "Non-greasy, fast-absorbing gel formulation that does not stain clothing",
    "Reduces localized swelling, stiffness, and tenderness in joints and muscles",
    "Provides instant cooling followed by deep warming pain relief",
    "Ideal for sprains, strains, low back pain, and arthritic joint discomfort",
  ],
  moleculeBenefits: [
    {
      molecule: "Diclofenac Diethylamine",
      strength: "1.16% w/w",
      points: [
        "Penetrates directly into subcutaneous tissues and synovial fluid",
        "Potently inhibits prostaglandin synthesis without systemic gastric side-effects",
      ],
    },
    {
      molecule: "Oleum Lini + Methyl Salicylate + Menthol",
      strength: "Topical Synergy",
      points: [
        "Oleum Lini enhances skin permeability for maximum drug absorption",
        "Menthol activates cold-sensitive receptors to deliver rapid analgesic counter-stimulation",
        "Methyl Salicylate induces local vasodilation to relieve muscle stiffness",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Apply a thin layer gently over the affected area 3 to 4 times daily",
    administration: "Massage gently into the skin until completely absorbed. Wash hands after application.",
    duration: "Use as needed until pain and inflammation subside, or as advised by a doctor.",
    precautions: "For external use only. Do not apply to broken skin, open wounds, or eyes.",
  },
  scientificClaim:
    "XINAC Gel — Fast & Deep Relief at the Site of Pain.",
  clinicalNote:
    "Indications: Sprains, strains, osteoarthritis of superficial joints, acute backache, and sports trauma.",
  disclaimer:
    "XINAC Gel is a topical analgesic formulation for external use only. Use under medical guidance.",
};

const xinacTh8Details: ProductDetailInfo = {
  overview:
    "XINAC-TH 8 Tablets combine Aceclofenac (100 mg) and Thiocolchicoside (8 mg) to deliver dual therapeutic power against severe pain and acute muscle contractures. Aceclofenac provides targeted anti-inflammatory and analgesic efficacy with high chondroprotection, while Thiocolchicoside offers non-sedating skeletal muscle relaxation via competitive GABA-A and glycinergic receptor activation.",
  targetAudience:
    "Indicated for acute, painful musculoskeletal conditions associated with severe muscle spasms, including acute lumbago (low back pain), cervical spondylosis, torticollis (stiff neck), post-traumatic and post-operative spasms, and painful osteoarthritis with muscular contracture.",
  keyFeatures: [
    {
      title: "Dual Therapeutic Power",
      description:
        "Synergistic pairing of selective NSAID Aceclofenac (100 mg) and muscle relaxant Thiocolchicoside (8 mg) for comprehensive pain-spasm relief.",
    },
    {
      title: "Breaks Spasm-Pain-Spasm Cycle",
      description:
        "Inhibits localized inflammatory cascades at the affected tissue while concurrently suppressing reflex muscle hyperactivity.",
    },
    {
      title: "Non-Sedating Muscle Relaxant",
      description:
        "Thiocolchicoside eases painful muscle spasms without causing daytime drowsiness, central sedation, or motor impairment.",
    },
    {
      title: "Restores Range of Motion",
      description:
        "Rapidly relieves muscle rigidity and stiffness, accelerating return to normal physical activity and rehabilitation.",
    },
  ],
  compositionList: [
    {
      ingredient: "Aceclofenac",
      strength: "100 mg",
      role: "Potent NSAID that selectively suppresses COX-2 and inflammatory cytokines with excellent gastric safety",
    },
    {
      ingredient: "Thiocolchicoside",
      strength: "8 mg",
      role: "Semisynthetic muscle relaxant acting as a selective agonist at inhibitory GABA-A and glycine receptors",
    },
  ],
  keyBenefits: [
    "Dual-action formulation tackling both inflammatory pain and underlying skeletal muscle spasm",
    "Rapid onset of relief in acute low back pain, cervical spasm, and severe musculoskeletal stiffness",
    "Non-sedating profile preserves daytime alertness and cognitive performance during treatment",
    "Superior gastric tolerability compared to traditional diclofenac combinations",
    "Manufactured in WHO-GMP certified facilities under strict Schedule H pharmaceutical standards",
    "Accelerates rehabilitation and improves spinal mobility and physical flexibility",
  ],
  moleculeBenefits: [
    {
      molecule: "Aceclofenac",
      strength: "100 mg",
      points: [
        "Selectively suppresses prostaglandin synthesis by inhibiting COX-2 enzyme with high safety",
        "Significantly decreases pro-inflammatory cytokines IL-1β and TNF-α at the site of trauma",
        "Demonstrates superior chondroprotection and mucosal safety compared to conventional NSAIDs",
      ],
    },
    {
      molecule: "Thiocolchicoside",
      strength: "8 mg",
      points: [
        "Interacts selectively with GABA-A and strychnine-sensitive glycine receptors in the spinal cord",
        "Suppresses involuntary muscular contracture without central sedation or loss of muscle tone",
        "Facilitates rapid restoration of joint range of motion and eases tension in acute spasm",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 tablet twice daily after meals, or as prescribed by an orthopedic physician",
    administration: "Swallow whole with a full glass of water after meals. Do not chew, break, or crush.",
    duration: "Short-term treatment of acute painful muscle contracture (typically 5 to 7 days) as directed.",
    precautions: "Schedule H prescription drug. Not to be sold by retail without the prescription of a Registered Medical Practitioner. Contraindicated in pregnancy, lactation, or patients with seizure disorders.",
  },
  scientificClaim:
    "XINAC-TH 8 — Dual Power to Break Severe Pain & Debilitating Muscle Spasms.",
  clinicalNote:
    "Indications: Acute lumbago (low back pain), cervical spondylitis, torticollis, sprains and strains, and painful musculoskeletal rigidity.",
  disclaimer:
    "XINAC-TH 8 is a Schedule H prescription drug. Use strictly under the guidance of a qualified healthcare practitioner.",
};

const urinarDetails: ProductDetailInfo = {
  overview:
    "URINAR Syrup is a natural cranberry extract formulation with D-Mannose and Potassium Magnesium Citrate. Scientifically designed to support kidney function, prevent UPEC bacterial adhesion, and end recurrent urinary tract infections.",
  targetAudience:
    "Indicated for moderate-to-severe UTI, recurrent UTIs, burning micturition, and cystitis.",
  keyFeatures: [
    {
      title: "Dual Pili Anti-Adhesion",
      description:
        "Prevents adhesion of Uro-Pathogenic E. Coli (UPEC) through both P-type and Type-1 pili.",
    },
    {
      title: "Long-Term Antibiotic Alternative",
      description:
        "Safe and suitable alternative to antibiotics for long-term use without developing microbial resistance.",
    },
    {
      title: "Rapid Symptom Suppression",
      description:
        "Helps suppress disturbing symptoms associated with UTI like burning micturition, itching, and urinary urgency.",
    },
    {
      title: "Renal & Bladder Protection",
      description:
        "Supports kidney function and normalizes urinary pH balance with Potassium Magnesium Citrate.",
    },
  ],
  compositionList: [
    {
      ingredient: "Natural Cranberry Extract",
      strength: "200 mg",
      role: "Inhibits P-type pili bacterial adhesion to bladder mucosa & provides antioxidant defense",
    },
    {
      ingredient: "D-Mannose",
      strength: "Standardized",
      role: "Binds Type-1 bacterial pili for natural flushing & elimination of UPEC via urine",
    },
    {
      ingredient: "Potassium Magnesium Citrate",
      strength: "978 mg",
      role: "Alkalizes urine pH, relieves burning micturition & supports kidney health",
    },
  ],
  keyBenefits: [
    "Supports kidney health and helps end recurrent urinary tract infections (UTIs)",
    "Prevents adhesion of Uro-Pathogenic E. Coli (UPEC) via both P-type and Type-1 pili",
    "Safe and suitable alternative to antibiotics for long-term prophylactic use",
    "Rapidly relieves burning micturition, dysuria, itching, and bladder discomfort",
    "Alkalizes urinary pH and supports healthy renal filtration",
    "Contains premium Natural Cranberry Extract with high-potency proanthocyanidins",
  ],
  moleculeBenefits: [
    {
      molecule: "Natural Cranberry Extract",
      strength: "200 mg",
      points: [
        "Rich in A-type proanthocyanidins that block P-fimbriae binding of UPEC to uroepithelial cells",
        "Provides potent natural antioxidant protection to inflamed bladder mucosal lining",
      ],
    },
    {
      molecule: "D-Mannose",
      strength: "Bioactive",
      points: [
        "Specifically binds Type-1 pili of E. coli, preventing bacterial attachment to the bladder wall",
        "Enables smooth physical flushing of trapped bacteria during urination without harming gut flora",
      ],
    },
    {
      molecule: "Potassium Magnesium Citrate",
      strength: "978 mg",
      points: [
        "Elevates urinary pH to relieve excruciating burning micturition and dysuria",
        "Supports renal tubular function and inhibits urinary crystal aggregation",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 10–15 mL twice daily with water, or as directed by a physician",
    administration:
      "Dilute in a full glass of water after meals. Maintain generous daily hydration (8–10 glasses).",
    duration:
      "Take during active episodes or continuously as long-term prophylaxis for recurrent UTIs.",
    precautions:
      "Prescription/dietary supportive therapy. If acute fever or systemic complications arise, consult a doctor.",
  },
  scientificClaim:
    "SUPPORTS KIDNEY ENDS UTI — A Natural Solution to Cure Infections.",
  clinicalNote:
    "Key Indications: Moderate-Severe UTI, Recurrent UTIs, Burning Micturition, and Cystitis.",
  disclaimer:
    "URINAR Syrup is a urinary tract health formulation designed for infection defense and supportive care. Use under the guidance of a healthcare professional.",
};

const myoNInstaDetails: ProductDetailInfo = {
  overview:
    "Myo n-Insta Tablets is an evidence-based once-daily formulation designed for women with Polycystic Ovary Syndrome (PCOS). It features the scientifically established physiological 40:1 ratio of Myo-Inositol (1100 mg) and D-Chiro-Inositol (27.6 mg), synergistically combined with Chromium Picolinate (400 mcg) and Vitamin D3 (400 IU). This specialized combination supports follicular maturation, ovulatory function, menstrual regularity, insulin sensitivity, and endocrine balance.",
  targetAudience:
    "Designed for women with Polycystic Ovary Syndrome (PCOS), irregular menstrual cycles, ovulatory dysfunction, insulin resistance, or those preparing for conception under gynecological guidance.",
  keyFeatures: [
    {
      title: "Physiological 40:1 Ratio",
      description:
        "Provides 1100 mg Myo-Inositol and 27.6 mg D-Chiro-Inositol, matching the physiological plasma ratio most extensively studied in PCOS clinical research.",
    },
    {
      title: "Convenient Once-Daily Formula",
      description:
        "Carefully calibrated for once-daily dosing to ensure maximum patient compliance and convenient long-term nutritional support.",
    },
    {
      title: "Enhanced Insulin Sensitivity",
      description:
        "Chromium Picolinate (400 mcg) potentiates insulin receptor activity and supports cellular glucose metabolism.",
    },
    {
      title: "Endocrine & Follicular Support",
      description:
        "Vitamin D3 (400 IU) supports ovarian steroidogenesis, healthy follicular development, and reproductive hormonal balance.",
    },
    {
      title: "Evidence-Based Formulation",
      description:
        "Formulated in alignment with modern international evidence-based guidelines and clinical studies on inositol therapy in PCOS.",
    },
  ],
  compositionList: [
    {
      ingredient: "Myo-Inositol",
      strength: "1100 mg",
      role: "Supports ovarian folliculogenesis, oocyte quality & FSH signaling (40:1 Ratio)",
    },
    {
      ingredient: "D-Chiro-Inositol",
      strength: "27.6 mg",
      role: "Maintains physiological 40:1 ratio & mediates cellular insulin actions",
    },
    {
      ingredient: "Chromium Picolinate",
      strength: "400 mcg",
      role: "Enhances insulin receptor sensitivity & healthy glucose utilization",
    },
    {
      ingredient: "Vitamin D3",
      strength: "400 IU",
      role: "Supports ovarian steroidogenesis, calcium homeostasis & follicular maturation",
    },
  ],
  keyBenefits: [
    "Features the evidence-based 40:1 Myo-Inositol to D-Chiro-Inositol ratio",
    "Supports normal ovulation and regular menstrual cycles",
    "Helps improve insulin sensitivity and glucose metabolism in PCOS",
    "Promotes healthy hormonal balance (LH/FSH ratio and androgen levels)",
    "Supports follicular maturation and oocyte quality",
    "Enhanced with Chromium Picolinate and Vitamin D3 for metabolic synergy",
    "Convenient once-daily tablet regimen",
  ],
  moleculeBenefits: [
    {
      molecule: "Myo-Inositol",
      strength: "1100 mg",
      points: [
        "Primary intracellular second messenger for FSH signaling in ovarian tissues",
        "Meta-analysis confirms inositol therapy significantly improves oocyte and embryo quality in PCOS (Mendoza et al., 2017)",
        "Improves peripheral insulin sensitivity and supports follicular maturation",
      ],
    },
    {
      molecule: "D-Chiro-Inositol",
      strength: "27.6 mg",
      points: [
        "Regulates glycogen synthesis and peripheral insulin-mediated glucose disposal",
        "Maintains the natural 40:1 physiological ratio without risking ovarian toxicity",
        "Helps balance androgen levels and ovarian endocrine profile",
      ],
    },
    {
      molecule: "Chromium Picolinate",
      strength: "400 mcg",
      points: [
        "Potentiates the action of insulin on target tissues",
        "Aids in managing insulin resistance and carbohydrate cravings in PCOS",
        "Supports lipid and energy metabolism",
      ],
    },
    {
      molecule: "Vitamin D3",
      strength: "400 IU",
      points: [
        "Receptors are expressed throughout ovarian and endometrial tissues",
        "Promotes steroidogenesis and healthy follicular development",
        "Synergizes with inositols for improved metabolic and reproductive outcomes",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: One tablet once daily after a meal, or as directed by a gynecologist",
    administration:
      "Swallow whole with water after a main meal. Consistent daily intake is recommended.",
    duration:
      "Continue for at least 3 months to support follicular maturation and ovulatory function. Women undergoing fertility treatment may continue as advised by their fertility specialist.",
    precautions:
      "Intended for once-daily nutritional support. Optimal regimen should be individualized based on clinical presentation. Consult a physician before use if pregnant, lactating, or taking other medications.",
  },
  scientificClaim:
    "Scientifically formulated with the physiological 40:1 Myo-Inositol:D-Chiro-Inositol ratio, clinically supported by meta-analyses to restore ovulatory function, enhance oocyte & embryo quality, and optimize metabolic parameters in women with PCOS.",
  clinicalNote:
    "Meta-Analysis: Mendoza N, Pérez L, Simoncini T, Genazzani A. Reprod Biomed Online 2017;35(5):529-535 (PMID: 28756130). Systematic review and meta-analysis of randomized controlled trials demonstrating that inositol supplementation improves oocyte and embryo quality, reduces required gonadotropins, and optimizes reproductive outcomes in women with PCOS undergoing assisted reproduction (ICSI).",
  disclaimer:
    "Myo n-Insta is a nutritional dietary supplement intended for once-daily support in women with PCOS and ovulatory irregularities. It is not intended to diagnose, treat, cure, or prevent any disease. Use under the guidance of a healthcare professional.",
};

const cosywashDetails: ProductDetailInfo = {
  overview:
    "CassyWash is an advanced feminine intimate hygiene wash enriched with Sea Buckthorn Extracts and Natural Lactic Acid (pH 3.5). Scientifically formulated for expert intimate hygiene to maintain vaginal pH hygiene, protect against irritation, deodorize, and provide daily gynecological care.",
  targetAudience:
    "Designed for women of all ages for everyday intimate hygiene, during menstruation, pregnancy, post-delivery, and to prevent recurrent vaginal itching, odour, and infections.",
  keyFeatures: [
    {
      title: "Maintains Vaginal pH Hygiene (pH 3.5)",
      description:
        "Specifically buffered to pH 3.5 to restore and preserve the delicate physiological acidic barrier of the intimate area.",
    },
    {
      title: "Enriched with Sea Buckthorn Extracts",
      description:
        "Natural Sea Buckthorn extract delivers rich antioxidants, vitamins, and omegas to soothe and nourish sensitive intimate skin.",
    },
    {
      title: "Helps Protect & Deodorizes",
      description:
        "Provides active all-day odor protection and shields intimate mucosal tissue from everyday microbial imbalance.",
    },
    {
      title: "Gynecological Care",
      description:
        "Gentle, soap-free formulation recommended for gynecological wellness and everyday feminine comfort.",
    },
  ],
  compositionList: [
    {
      ingredient: "Natural Lactic Acid (pH 3.5)",
      strength: "Buffered Formula",
      role: "Maintains optimal physiological pH 3.5 & supports beneficial intimate microflora",
    },
    {
      ingredient: "Sea Buckthorn Extracts",
      strength: "Standardized Botanical Extract",
      role: "Rich in antioxidants, essential fatty acids & vitamins to nourish sensitive mucosal tissue",
    },
    {
      ingredient: "Mild Intimate Cleansing Base",
      strength: "Soap-Free Formula",
      role: "Gentle, non-drying surfactants that preserve intimate moisture and soothe delicate skin",
    },
  ],
  keyBenefits: [
    "Expert intimate hygiene with optimal pH 3.5 protection",
    "Enriched with natural Sea Buckthorn extracts for antioxidant tissue nourishment",
    "Maintains vaginal pH hygiene and natural protective flora",
    "Helps protect against dryness, irritation, and discomfort",
    "Deodorizes effectively to maintain long-lasting freshness and confidence",
    "Mild, soap-free, and ideal for daily use including during menstruation",
  ],
  moleculeBenefits: [
    {
      molecule: "Natural Lactic Acid (pH 3.5)",
      strength: "Targeted pH 3.5",
      points: [
        "Re-establishes the physiological acid mantle (pH 3.5) of the intimate area",
        "Selectively fosters the proliferation of protective Döderlein's lactobacilli",
        "Suppresses colonization of odor-causing and pathogenic microorganisms",
      ],
    },
    {
      molecule: "Sea Buckthorn Extracts",
      strength: "Bioactive Omegas & Carotenoids",
      points: [
        "Provides rich omega-7 and omega-3 fatty acids that rejuvenate intimate mucosal membranes",
        "Potent natural anti-inflammatory action soothes burning and pruritus",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Use a small amount (2–3 mL) during daily shower or intimate wash",
    administration:
      "Pour a few drops onto your palm, gently apply and lather the external intimate area, then rinse thoroughly with clean water. Pat dry.",
    duration: "Recommended for daily routine hygiene, during menstruation, post-exercise, and post-pregnancy.",
    precautions: "For external intimate use only. Do not use inside the vaginal canal. Discontinue if unusual irritation occurs.",
  },
  scientificClaim:
    "CassyWash — Expert Intimate Hygiene. Enriched with Sea Buckthorn Extracts. pH 3.5.",
  clinicalNote:
    "The 4 Pillars of Gynecological Care: Enriched with Sea Buckthorn Extracts | Maintains Vaginal pH Hygiene | Helps Protect, Deodorizes | Gynecological Care (pH 3.5).",
  disclaimer:
    "CassyWash is a feminine intimate hygiene wash for external daily care. Use under the guidance of a healthcare professional.",
};

const calziumDetails: ProductDetailInfo = {
  overview:
    "CALZIUM is a comprehensive bone health formulation containing Calcium Citrate, a highly bioavailable form of calcium, along with Vitamin D3, Magnesium, and Zinc. It is designed to support bone mineralization, improve calcium absorption, maintain muscle function, and help reduce the risk of calcium deficiency. Calcium citrate is well absorbed even in individuals with reduced stomach acid production.",
  targetAudience:
    "Key Indications: Osteoporosis, Pregnancy & Lactation, Old Age (Senile Bone Loss), and Fractures. Formulated to replenish bone minerals, reduce fracture risk, and enhance muscular agility.",
  keyFeatures: [
    {
      title: "Highly Bioavailable Calcium Citrate",
      description:
        "Calcium citrate provides superior absorption compared to carbonate and does not depend on gastric acidity for dissolution.",
    },
    {
      title: "Enhanced Absorption with Vitamin D3",
      description:
        "Vitamin D3 (1000 IU) actively facilitates intestinal calcium transport and maintains physiological bone mineral density.",
    },
    {
      title: "Bone Matrix Support with Magnesium",
      description:
        "Magnesium (100 mg) contributes directly to bone mineral architecture, activates vitamin D, and maintains healthy neuromuscular tone.",
    },
    {
      title: "Collagen & Osteoblast Synthesis with Zinc",
      description:
        "Zinc (4 mg) is an essential trace mineral required for collagen matrix formation, osteoblast stimulation, and bone remodeling.",
    },
    {
      title: "Flexible Administration",
      description:
        "Can be taken with or without meals, making it ideal for patients taking proton pump inhibitors (PPIs) or antacids.",
    },
    {
      title: "Superior Gastrointestinal Tolerance",
      description:
        "Well tolerated with a significantly lower incidence of bloating, constipation, and gas compared to calcium carbonate formulations.",
    },
  ],
  compositionList: [
    {
      ingredient: "Calcium Citrate",
      strength: "1000 mg",
      role: "Highly bioavailable organic calcium source for bone mineralization",
    },
    {
      ingredient: "Vitamin D3",
      strength: "1000 IU",
      role: "Increases intestinal calcium absorption & reduces bone loss",
    },
    {
      ingredient: "Magnesium",
      strength: "100 mg",
      role: "Supports bone structural matrix, vitamin D activation & muscle function",
    },
    {
      ingredient: "Zinc",
      strength: "4 mg",
      role: "Stimulates osteoblastic bone formation & collagen synthesis",
    },
  ],
  keyBenefits: [
    "Calcium Citrate & Zinc effectively reduce the incidence and severity of hypocalcemia",
    "Vitamin D3 enhances calcium absorption and helps in bone mineralization",
    "Regulates bone metabolism and replenishes age-related bone loss",
    "Lessens the risk of osteoporotic fractures and promotes bone remodeling",
    "Improves physical balance, muscular strength, and agility in old age",
    "Supports strong, dense, and healthy bones across all life stages",
    "Provides proven nutritional bone support during pregnancy and lactation",
    "Well tolerated with minimal risk of constipation or gastric distress",
  ],
  moleculeBenefits: [
    {
      molecule: "Calcium Citrate",
      strength: "1000 mg",
      points: [
        "Clinical meta-analyses demonstrate superior bioavailability compared to calcium carbonate",
        "Does not require gastric acid for solubilization; effectively absorbed in fasting or fed state",
        "Preferred formulation for patients on PPIs, H2 blockers, or with achlorhydria",
      ],
    },
    {
      molecule: "Vitamin D3",
      strength: "1000 IU",
      points: [
        "Essential for intestinal active transport of calcium and phosphorus",
        "Maintains serum calcium homeostasis and reduces parathyroid hormone-driven bone resorption",
        "Reduces the risk of osteomalacia, osteopenia, and osteoporosis",
      ],
    },
    {
      molecule: "Magnesium",
      strength: "100 mg",
      points: [
        "Constitutes a major structural component of the hydroxyapatite bone crystal lattice",
        "Crucial cofactor required for the hepatic conversion of vitamin D into its active hormonal form",
        "Assists in muscle relaxation and normal neuromuscular transmission",
      ],
    },
    {
      molecule: "Zinc",
      strength: "4 mg",
      points: [
        "Essential cofactor for alkaline phosphatase, an enzyme critical for bone mineralization",
        "Stimulates osteoblast differentiation and inhibits osteoclast-mediated bone breakdown",
        "Supports collagen synthesis and accelerated fracture repair",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: One tablet daily after meals, or as directed by a healthcare professional",
    administration:
      "Can be taken with or without meals with a glass of water. Suitable for daily dietary supplementation.",
    duration:
      "Recommended for continuous, long-term bone health maintenance, osteoporosis prophylaxis, or fracture recovery as advised by a physician.",
    precautions:
      "Consult a healthcare professional if you have hypercalcemia, kidney stones, or severe renal impairment. Keep out of reach of children.",
  },
  pregnancyLactation: {
    overview:
      "CALZIUM provides Calcium Citrate, Vitamin D3, Magnesium, and Zinc, essential nutrients that support the increased nutritional requirements during pregnancy and breastfeeding.",
    pregnancyBenefits: [
      "Supports fetal skeletal and tooth development",
      "Helps meet increased maternal calcium requirements",
      "Supports normal maternal bone health",
      "Vitamin D3 enhances calcium absorption and utilization",
      "Magnesium supports normal muscle and nerve function",
      "Zinc contributes to normal fetal growth and development",
    ],
    lactationBenefits: [
      "Helps replenish maternal calcium stores",
      "Supports maintenance of maternal bone mineral density",
      "Provides nutritional support during breastfeeding",
      "Helps meet the increased calcium demand during milk production",
    ],
    usageNote:
      "One tablet once daily after meals, or as directed by the treating obstetrician or gynecologist. During pregnancy and lactation, calcium supplementation should be individualized based on dietary calcium intake, clinical assessment, and local obstetric guidelines.",
    guidelines: [
      { population: "Adult Women (19–50 years)", intake: "1000 mg/day" },
      { population: "Pregnant Women (19–50 years)", intake: "1000 mg/day" },
      { population: "Lactating Women (19–50 years)", intake: "1000 mg/day" },
      { population: "Adolescents (14–18 years), including pregnant/lactating", intake: "1300 mg/day" },
    ],
    references: [
      {
        source: "World Health Organization (WHO)",
        title: "Calcium supplementation during pregnancy to reduce the risk of hypertensive disorders and related complications",
        description:
          "WHO recommends calcium supplementation (typically 1.5–2.0 g elemental calcium/day) in populations with low dietary calcium intake to reduce the risk of preeclampsia.",
        url: "https://www.who.int/publications/i/item/9789241505376",
      },
      {
        source: "American College of Obstetricians and Gynecologists (ACOG)",
        title: "Nutrition During Pregnancy",
        description:
          "Recommends adequate calcium intake during pregnancy to support maternal and fetal bone health.",
      },
      {
        source: "National Institutes of Health (NIH), Office of Dietary Supplements",
        title: "Calcium Fact Sheet for Health Professionals",
        description:
          "Describes the increased calcium requirements during pregnancy and lactation and the role of calcium in bone health.",
        url: "https://ods.od.nih.gov/factsheets/Calcium-HealthProfessional/",
      },
    ],
    marketingStatement:
      "CALZIUM – Complete Bone Nutrition for Every Stage of Life, Including Pregnancy & Lactation.",
  },
  scientificClaim:
    "CALZIUM – Complete Bone Nutrition for Every Stage of Life, Including Pregnancy & Lactation.",
  clinicalNote:
    "Meta-analyses confirm that calcium citrate exhibits significantly higher absorption than calcium carbonate regardless of gastric pH. The addition of Vitamin D3, Magnesium, and Zinc provides synergistic multimineral support for bone remodeling, maternal calcium maintenance, and fetal skeletal growth.",
  disclaimer:
    "CALZIUM is a nutritional dietary supplement designed for bone and skeletal health. It is not intended to diagnose, treat, cure, or prevent any disease. Use under the guidance of a healthcare professional.",
};

const hairwizAdvanceDetails: ProductDetailInfo = {
  overview:
    "Hairwiz Advance is a scientifically formulated nutraceutical designed to support healthy hair growth, reduce hair fall, and improve overall hair quality. It combines powerful botanical extracts, essential amino acids, vitamins, and minerals that nourish the hair follicle from within, helping maintain stronger, thicker, and healthier hair.",
  targetAudience:
    "Ideal for individuals experiencing hair fall, weak and brittle hair, thinning hair density, nutritional hair deficiency, sluggish hair growth, or anyone seeking long-term hair health and follicle vitality maintenance. Formulated for both men and women.",
  keyFeatures: [
    {
      title: "Multi-Ingredient Evidence-Based Formula",
      description:
        "Synergistic integration of standardized botanical extracts, structural amino acids, and essential micronutrients targeting multifactorial hair thinning.",
    },
    {
      title: "Dual Action Follicle Support",
      description:
        "Simultaneously promotes active anagen phase hair growth and strengthens hair roots to significantly reduce excessive telogen shedding.",
    },
    {
      title: "Botanical Extracts + Essential Amino Acids",
      description:
        "Combines Urtica dioica, Equisetum arvense, Grape Seed, Wheat Germ, and Millet extract with essential protein building blocks for keratin synthesis.",
    },
    {
      title: "Complete Vitamin & Mineral Matrix",
      description:
        "Supplies comprehensive bioavailable micronutrients required for dermal papilla cell proliferation and healthy scalp microcirculation.",
    },
    {
      title: "Daily Nutritional Hair Therapy",
      description:
        "Non-hormonal, drug-free oral nutraceutical therapy designed for sustained follicle nourishment and visible hair volume.",
    },
    {
      title: "Suitable for Men & Women",
      description:
        "Universally formulated to address nutritional, oxidative, and environmental factors contributing to hair thinning across genders.",
    },
  ],
  compositionList: [
    {
      ingredient: "Urtica dioica Extract (Nettle)",
      strength: "Standardized Extract",
      role: "Supports healthy hair growth, scalp microcirculation & natural 5-AR modulation",
    },
    {
      ingredient: "Equisetum arvense (Horsetail) Extract",
      strength: "Standardized Extract",
      role: "Natural source of bioavailable silica to reinforce hair shaft tensile strength",
    },
    {
      ingredient: "Grape Seed Extract",
      strength: "Standardized Extract",
      role: "Potent proanthocyanidin antioxidant protecting hair follicles from oxidative stress",
    },
    {
      ingredient: "Wheat Germ Extract",
      strength: "Standardized Extract",
      role: "Rich in natural Vitamin E and lipids that deeply nourish hair matrix and scalp",
    },
    {
      ingredient: "Millet Extract",
      strength: "Standardized Extract",
      role: "Rich in miliacin to stimulate keratinocyte activity, keratin production & hair structure",
    },
    {
      ingredient: "Essential Amino Acids",
      strength: "Optimized Complex",
      role: "Fundamental protein building blocks required for healthy hair keratin synthesis",
    },
    {
      ingredient: "Vitamins & Minerals",
      strength: "Bioactive Matrix",
      role: "Essential micronutrients supporting cellular metabolism, follicle vitality & scalp health",
    },
  ],
  keyBenefits: [
    "Helps Reduce Hair Fall — Supports stronger hair roots and minimizes excessive hair shedding",
    "Promotes Healthy Hair Growth — Provides essential nutrients required for healthy hair follicle function",
    "Strengthens Hair Follicles — Helps improve hair anchorage and supports stronger, healthier strands",
    "Improves Hair Thickness & Density — Supports fuller-looking, denser, and healthier hair with regular use",
    "Antioxidant Protection — Grape Seed Extract helps protect hair follicles from oxidative stress",
    "Nourishes Hair from Within — Provides amino acids, vitamins, and minerals essential for keratin production",
    "Supports Healthy Scalp — Botanical ingredients help maintain a healthy scalp environment for optimal hair growth",
  ],
  moleculeBenefits: [
    {
      molecule: "Urtica dioica Extract (Nettle)",
      strength: "Botanical Active",
      points: [
        "Rich in plant phytosterols, minerals, and flavonoids that support microvascular blood flow to the dermal papilla",
        "Assists in naturally modulating local 5-alpha reductase activity to reduce follicle miniaturization",
        "Helps calm scalp inflammation and encourages stronger root anchoring",
      ],
    },
    {
      molecule: "Equisetum arvense (Horsetail) Extract",
      strength: "Organic Silica Source",
      points: [
        "Nature's richest botanical source of organic silicon (silica)",
        "Reinforces the keratin protein architecture, improving elasticity and reducing brittle hair breakage",
        "Promotes structural density, luster, and strand resilience in emerging hair shafts",
      ],
    },
    {
      molecule: "Grape Seed Extract",
      strength: "Potent OPC Antioxidant",
      points: [
        "Concentrated in oligomeric proanthocyanidins (OPCs), possessing antioxidant potency far exceeding Vitamins C & E",
        "Shields delicate follicle stem cells from oxidative damage induced by pollution, UV rays, and psychological stress",
        "Stimulates cell proliferation in the hair follicle bulb, supporting active anagen growth phase transition",
      ],
    },
    {
      molecule: "Wheat Germ Extract",
      strength: "Natural Vitamin E & Lipids",
      points: [
        "Naturally rich in alpha-tocopherol (Vitamin E) and essential linoleic fatty acids",
        "Replenishes the intercellular lipid cement of the hair cuticle, sealing in hydration and gloss",
        "Nourishes cellular membranes within the follicle for enhanced shaft vitality",
      ],
    },
    {
      molecule: "Millet Extract",
      strength: "Miliacin & Plant Sterols",
      points: [
        "Supplies miliacin, a specialized botanical triterpenoid clinically demonstrated to stimulate keratinocyte activity",
        "Accelerates metabolic turnover in the root sheath to support dense hair synthesis",
        "Improves hair shaft caliber and overall tensile resilience against mechanical traction",
      ],
    },
    {
      molecule: "Essential Amino Acids & Micronutrients",
      strength: "Complete Matrix",
      points: [
        "Provides sulfur-bearing amino acids (L-Cysteine, L-Methionine) essential for disulfide bridging in keratin",
        "Complete vitamin and mineral spectrum fuels energy-intensive hair matrix biosynthesis",
        "Prevents nutritional diffuse telogen effluvium and restores vibrant strand thickness",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 tablet once or twice daily after meals, or as recommended by a dermatologist / physician",
    administration:
      "Swallow whole with water after a main meal. Consistent daily intake is recommended for best clinical results.",
    duration:
      "Recommended for a continuous duration of at least 3 to 6 months to support complete hair growth cycles and visible follicle revitalisation.",
    precautions:
      "Dietary nutraceutical supplement. Not intended for use as a substitute for a varied diet. Consult a healthcare practitioner before use if pregnant, lactating, or taking prescription medications.",
  },
  scientificClaim:
    "Advanced Nutritional Therapy for Stronger, Thicker & Healthier Hair.",
  clinicalNote:
    "Doctor Positioning: HAIRWIZ ADVANCE — Comprehensive Hair Nutrition Beyond Ordinary Supplements. Botanical Science + Essential Amino Acids + Complete Micronutrients. Advanced Hair Nutrition. Visible Confidence.",
  disclaimer:
    "HAIRWIZ ADVANCE is a comprehensive nutritional dietary supplement formulated for hair health and follicle vitality. It is not intended to diagnose, treat, cure, or prevent any disease. For best results, use under the guidance of a healthcare professional or dermatologist.",
};

const q10OmegaPlusDetails: ProductDetailInfo = {
  overview:
    "Q10 OMEGA PLUS is an advanced bioenergetic and antioxidant formulation combining Co-enzyme Q10 (100 mg), Lycopene (4000 mcg), L-Arginine (100 mg), Omega-3 Fatty Acids (EPA/DHA), and Selenium. Formulated to restore immunity and potency naturally by fueling mitochondrial ATP synthesis, improving reproductive parameters in both men and women, and supporting cardiovascular health.",
  targetAudience:
    "Indicated for male subfertility (low sperm count, motility, or abnormal morphology), female follicular and egg quality enhancement, cardiovascular protection, blood pressure support, and systemic antioxidant defense.",
  keyFeatures: [
    {
      title: "Mitochondrial Energy & ATP Synthesis",
      description:
        "CoQ10 serves as an essential electron carrier in the respiratory chain, directly fueling cellular ATP production and flagellar sperm motility.",
    },
    {
      title: "Dual Reproductive Support (Male & Female)",
      description:
        "Enhances male sperm count, motility, and morphology while supporting female oocyte quality, ovarian bioenergetics, and fertilization rates.",
    },
    {
      title: "Cardiovascular & Endothelial Defense",
      description:
        "Strengthens cardiac contractile function, prevents LDL cholesterol oxidation, and supports healthy blood pressure regulation.",
    },
    {
      title: "The Lycopene Factor",
      description:
        "High-potency carotenoid that halts free radical cascades, protects cellular DNA, and promotes healthy microvascular circulation.",
    },
  ],
  compositionList: [
    {
      ingredient: "Co-enzyme Q10",
      strength: "100 mg",
      role: "Essential electron transport cofactor for mitochondrial ATP synthesis & motility",
    },
    {
      ingredient: "Lycopene",
      strength: "4000 mcg",
      role: "The most potent carotenoid; neutralizes free radicals & prevents lipid peroxidation",
    },
    {
      ingredient: "L-Arginine",
      strength: "100 mg",
      role: "Nitric oxide precursor supporting microvascular blood flow & endothelial health",
    },
    {
      ingredient: "Omega-3 Fatty Acids (EPA 90 mg + DHA 60 mg)",
      strength: "Providing 500 mg",
      role: "Preserves cell membrane fluidity, acrosome integrity & cardiovascular health",
    },
    {
      ingredient: "Selenium (as Selenium Dioxide)",
      strength: "70 mcg",
      role: "Essential trace mineral for glutathione peroxidase activity & spermatogenesis",
    },
    {
      ingredient: "Probiotics",
      strength: "500 mg",
      role: "Supports gut microbiome balance and micronutrient bioavailability",
    },
  ],
  keyBenefits: [
    "Helps lower and maintain healthy blood pressure within normal physiological range",
    "Protects cholesterol from damaging oxidation, helping prevent atherosclerotic plaque buildup",
    "Strengthens myocardial contractile ability through enhanced mitochondrial bioenergetics",
    "Significantly improves sperm count, forward progressive motility, and normal morphology",
    "Enhances female reproductive health by improving egg quality and fertilization rates",
    "Prevents oxidative photo-damage of skin cells and promotes systemic cellular vitality",
    "Acts as an indispensable physiological cofactor in the mitochondrial electron transport chain",
  ],
  moleculeBenefits: [
    {
      molecule: "Co-enzyme Q10",
      strength: "100 mg",
      points: [
        "Fuels mitochondrial ATP generation directly powering sperm flagellar motility and myocardial contraction",
        "Potent lipid-soluble antioxidant that protects cellular membranes against lipid peroxidation",
        "Clinical trials confirm significant increases in seminal and intracellular ubiquinol concentrations",
      ],
    },
    {
      molecule: "The Lycopene Factor",
      strength: "4000 mcg",
      points: [
        "Recognized as the most effective natural carotenoid for quenching singlet oxygen and free radicals",
        "Concentrates in gonadal tissues, shielding reproductive DNA from oxidative stress",
        "Exerts positive effects on bone density and supports healthy gestational microvasculature",
      ],
    },
    {
      molecule: "Omega-3 (EPA/DHA) + L-Arginine",
      strength: "500 mg / 100 mg",
      points: [
        "Provides DHA for sperm membrane fluidity and acrosome flexibility required for fertilization",
        "L-Arginine stimulates endothelial nitric oxide production, enhancing microvascular circulation",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 softgel capsule once or twice daily after meals, or as directed by a physician",
    administration:
      "Swallow whole with a glass of water after meals. Consistent daily intake is recommended.",
    duration:
      "Recommended for at least 3 to 6 months to cover the complete spermatogenic cycle (approx. 74 days) or preconception preparation.",
    precautions:
      "Nutritional dietary supplement. Consult a doctor before use if taking antihypertensive or anticoagulant medications. Store in a cool, dry place.",
  },
  scientificClaim:
    "Restores Immunity & Potency Naturally — Clinically proven mitochondrial and antioxidant therapy for reproductive vitality and cardiovascular strength.",
  clinicalNote:
    "Key Evidence: Double-blind RCTs (Balercia et al., Fertil Steril 2009) and nutritional cardiology studies confirm CoQ10 significantly improves sperm motility kinetic features and myocardial bioenergetics.",
  disclaimer:
    "Q10 OMEGA PLUS is a nutritional dietary supplement formulated for cellular bioenergetics and vitality. Use under the guidance of a qualified healthcare professional.",
};

const calziumTotalDetails: ProductDetailInfo = {
  overview:
    "CALZIUM TOTAL is an advanced bone matrix therapy combining active Calcitriol, Calcium Citrate Malate, Methylcobalamin, Vitamin K2-7, L-Methylfolate, Zinc, and Magnesium in soft gelatin capsules. Formulated to beat the bone weakening process, inhibit osteoclastic bone resorption, and stimulate active bone mineralization.",
  targetAudience:
    "Indicated for Senile Osteoporosis, Postmenopausal Osteoporosis, Corticosteroid-induced Osteoporosis, high fracture risk, and severe bone mineral density (BMD) loss.",
  keyFeatures: [
    {
      title: "Active Hormonal Calcium Regulation",
      description:
        "Calcitriol directly regulates intestinal calcium absorption and maintains physiological serum calcium balance.",
    },
    {
      title: "Bone Resorption Inhibition",
      description:
        "Vitamin K2-7 directs calcium into the bone crystal matrix and inhibits pathological osteoclastic bone resorption.",
    },
    {
      title: "Fracture Risk Reduction & BMD",
      description:
        "L-Methylfolate reduces fracture risk, improves bone mineral density, and supports microarchitectural bone quality.",
    },
    {
      title: "Osteoblastic Stimulation",
      description:
        "Magnesium and Zinc promote osteoblast adhesion, proliferation, differentiation, and skeletal homeostasis.",
    },
  ],
  compositionList: [
    {
      ingredient: "Calcitriol",
      strength: "Active Form",
      role: "Regulates intestinal calcium absorption and bone mineralization",
    },
    {
      ingredient: "Calcium Citrate Malate",
      strength: "Bioavailable Calcium",
      role: "Required for continuous deposition of bone mineral throughout life",
    },
    {
      ingredient: "Vitamin K2-7",
      strength: "Bioactive Menaquinone",
      role: "Beneficial in managing bone loss; inhibits osteoclastic bone resorption",
    },
    {
      ingredient: "L-Methylfolate",
      strength: "Active Folate",
      role: "Reduces risk of osteoporotic fractures and improves bone mineral density (BMD)",
    },
    {
      ingredient: "Methylcobalamin",
      strength: "Bioactive B12",
      role: "Supports neuromuscular coordination and remethylation in bone matrix",
    },
    {
      ingredient: "Magnesium",
      strength: "Essential Mineral",
      role: "Improves osteoblastic adhesion, proliferation, and differentiation",
    },
    {
      ingredient: "Zinc",
      strength: "Essential Trace Element",
      role: "Essential for normal skeletal growth, collagen synthesis, and bone homeostasis",
    },
  ],
  keyBenefits: [
    "Beats the weakening process to strengthen bones and improve structural matrix",
    "Inhibits pathological bone resorption and preserves bone mineral density (BMD)",
    "Significantly reduces fracture risk in senile and postmenopausal osteoporosis",
    "Addresses corticosteroid-induced osteopenia and secondary bone loss",
    "Improves osteoblastic cell proliferation, collagen formation, and skeletal resilience",
  ],
  moleculeBenefits: [
    {
      molecule: "Calcitriol + Calcium Citrate Malate",
      strength: "Active Mineralization Axis",
      points: [
        "Calcitriol regulates intestinal calcium absorption without requiring renal activation",
        "Calcium Citrate Malate provides highly bioavailable calcium required for lifetime bone mineral deposition",
      ],
    },
    {
      molecule: "Vitamin K2-7 + L-Methylfolate",
      strength: "Resorption Blockade & Matrix",
      points: [
        "Vitamin K2-7 activates osteocalcin to bind calcium into bone and prevents vascular calcification",
        "L-Methylfolate reduces osteoporotic fracture incidence and improves bone mineral density",
      ],
    },
    {
      molecule: "Magnesium + Zinc",
      strength: "Osteogenic Synergy",
      points: [
        "Magnesium improves osteoblastic adhesion, proliferation, and differentiation",
        "Zinc is essential for skeletal growth, collagen matrix synthesis, and bone homeostasis",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 softgel capsule once daily after meals, or as directed by an orthopedist / physician",
    administration: "Swallow whole with water after a main meal. Consistent daily intake is recommended.",
    duration: "Recommended for continuous long-term management in osteoporosis and steroid-induced bone loss.",
    precautions: "Monitor serum calcium and renal parameters during prolonged therapy. Use under medical supervision.",
  },
  scientificClaim:
    "Strengthens Your Patients Against Multiple Physical Weakness & Bone Loss.",
  clinicalNote:
    "Key Indications: Senile Osteoporosis, Postmenopausal Osteoporosis, and Corticosteroid-induced Osteoporosis.",
  disclaimer:
    "CALZIUM TOTAL is a therapeutic bone health formulation. Use under the guidance of a healthcare professional.",
};

const calziumD3NanoDetails: ProductDetailInfo = {
  overview:
    "CALZIUM-D3 NANO delivers high-potency Cholecalciferol (Vitamin D3 60,000 IU) in an advanced nano-emulsified oral solution for rapid systemic absorption, all-round bone care support, and immediate replenishment of depleted Vitamin D stores.",
  targetAudience:
    "Indicated for severe Vitamin D deficiency (hypovitaminosis D), osteomalacia, osteoporosis co-therapy, elderly bone fragility, and calcium malabsorption states.",
  keyFeatures: [
    {
      title: "Advanced Nano-Emulsion Technology",
      description:
        "Nano-sized droplets ensure rapid, superior absorption independent of dietary fat intake.",
    },
    {
      title: "Therapeutic Weekly Dosing",
      description:
        "High-concentration 60,000 IU Cholecalciferol for fast correction of hypovitaminosis D.",
    },
    {
      title: "All-Round Bone Care Support",
      description:
        "Maximizes calcium and phosphorus absorption, preventing secondary hyperparathyroidism.",
    },
    {
      title: "Ready-to-Drink Oral Liquid",
      description:
        "Pleasant-tasting oral liquid format ensuring excellent patient compliance.",
    },
  ],
  compositionList: [
    {
      ingredient: "Cholecalciferol (Vitamin D3) I.P.",
      strength: "60,000 IU",
      role: "Essential for intestinal calcium absorption, skeletal mineralization & neuromuscular strength",
    },
  ],
  keyBenefits: [
    "Rapidly elevates and normalizes serum 25-hydroxyvitamin D [25(OH)D] levels",
    "Provides comprehensive all-round bone care support",
    "Enhances intestinal calcium absorption and bone mineralization",
    "Improves muscle strength and physical balance, reducing fall and fracture risks in old age",
    "Superior bioavailability through advanced nano-emulsion delivery",
  ],
  moleculeBenefits: [
    {
      molecule: "Cholecalciferol I.P. (Nano-emulsified)",
      strength: "60,000 IU / 5 mL",
      points: [
        "Rapidly absorbed via lymphatic pathways to replenish hepatic 25(OH)D reserves",
        "Crucial for active calcium transport across the intestinal brush border",
        "Restores physiological bone turnover and reduces fracture susceptibility",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: One 5 mL oral bottle once weekly for 6 to 8 weeks, followed by maintenance as directed by a doctor",
    administration: "Drink the contents of one shot bottle directly, or mix with milk/water after a meal.",
    duration: "As advised by the treating physician based on baseline serum 25(OH)D levels.",
    precautions: "Do not exceed prescribed frequency. Contraindicated in hypercalcemia or Vitamin D toxicity.",
  },
  scientificClaim:
    "CALZIUM-D3 NANO — For All-Round Bone Care Support.",
  clinicalNote:
    "Recommended for rapid loading therapy in severe Vitamin D deficiency (<20 ng/mL) and synergistic co-therapy in osteoporosis.",
  disclaimer:
    "CALZIUM-D3 NANO is a high-potency Vitamin D3 oral solution. Use under medical guidance.",
};

const tisartinTrioDetails: ProductDetailInfo = {
  overview:
    "TISARTIN-TRIO is a triple combination antihypertensive tablet combining Telmisartan (40 mg), Amlodipine (5 mg), and Hydrochlorothiazide (12.5 mg). Scientifically designed for aggressive blood pressure control in patients requiring multi-pathway hemodynamic reduction to protect vital organs and prevent cardiovascular events.",
  targetAudience:
    "Indicated for severe or stage 2 essential hypertension, patients not adequately controlled on dual therapy or monotherapy, and individuals at elevated risk of stroke and heart failure.",
  keyFeatures: [
    {
      title: "Triple Synergistic Mechanism",
      description:
        "Combines an ARB (Telmisartan), CCB (Amlodipine), and Thiazide Diuretic (HCTZ) targeting vasoconstriction, calcium influx, and volume overload simultaneously.",
    },
    {
      title: "Aggressive 24-Hour BP Control",
      description:
        "Telmisartan provides a 24-hour terminal elimination half-life, ensuring powerful and sustained nocturnal and early morning BP suppression.",
    },
    {
      title: "Proven Diastolic BP Reduction",
      description:
        "Produces greater reduction in diastolic blood pressure compared to ACE inhibitors such as enalapril in patients with essential hypertension.",
    },
    {
      title: "Organ Protection & Event Prevention",
      description:
        "Promotes systemic vascular relaxation and natriuresis, lowering peripheral resistance to help prevent strokes, heart attacks, and heart failure.",
    },
  ],
  compositionList: [
    {
      ingredient: "Telmisartan",
      strength: "40 mg",
      role: "Angiotensin receptor blocker (ARB) with 24-h half-life; superior diastolic reduction & organ protection",
    },
    {
      ingredient: "Amlodipine",
      strength: "5 mg",
      role: "Dihydropyridine calcium channel blocker; relaxes vascular smooth muscle to prevent strokes & heart attacks",
    },
    {
      ingredient: "Hydrochlorothiazide",
      strength: "12.5 mg",
      role: "Thiazide diuretic; promotes natriuresis, lowers plasma volume & reduces peripheral resistance",
    },
  ],
  keyBenefits: [
    "A triple combination designed for aggressive and predictable 24-hour blood pressure control",
    "Telmisartan provides a terminal elimination half-life of 24 hours for round-the-clock protection",
    "Produces greater reduction in diastolic BP than enalapril in essential hypertension",
    "Relaxes blood vessels to lower high blood pressure and help prevent strokes and heart attacks",
    "Hydrochlorothiazide promotes diuresis and sodium excretion, decreasing plasma volume and peripheral resistance",
    "Provides comprehensive organ protection across heart, brain, and kidneys",
  ],
  moleculeBenefits: [
    {
      molecule: "Telmisartan",
      strength: "40 mg",
      points: [
        "Potent, long-acting non-peptide angiotensin II type 1 (AT1) receptor antagonist",
        "Terminal elimination half-life of ~24 hours provides reliable early-morning BP control",
        "Clinical trials prove greater reduction in diastolic blood pressure compared to ACE inhibitors like enalapril",
      ],
    },
    {
      molecule: "Amlodipine",
      strength: "5 mg",
      points: [
        "Inhibits transmembrane influx of calcium ions into vascular smooth muscle and cardiac muscle",
        "Direct peripheral arterial vasodilation decreases systemic vascular resistance and cardiac afterload",
        "Proven long-term reduction in cardiovascular morbidity, myocardial infarction, and stroke risk",
      ],
    },
    {
      molecule: "Hydrochlorothiazide (HCTZ)",
      strength: "12.5 mg",
      points: [
        "Acts on the renal tubular mechanisms of electrolyte reabsorption in the distal convoluted tubule",
        "Promotes excretion of sodium and chloride, decreasing circulating blood volume",
        "Synergizes with Telmisartan and Amlodipine to counter compensatory volume retention",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 tablet once daily, preferably in the morning, or as prescribed by a cardiologist / physician",
    administration: "Swallow whole with water, with or without food. Consistent daily administration is recommended.",
    duration: "Chronic maintenance therapy for long-term blood pressure control and cardiovascular protection.",
    precautions: "Contraindicated in pregnancy. Monitor serum electrolytes, blood pressure, and renal function regularly.",
  },
  scientificClaim:
    "A Triple Combination for Aggressive BP Control — With Healthier Lifeline.",
  clinicalNote:
    "Key Indications: Severe hypertension, patients uncontrolled on dual therapy, and hypertensive patients requiring multi-organ protection.",
  disclaimer:
    "TISARTIN-TRIO is a prescription antihypertensive medication. To be used strictly under medical supervision.",
};

const tisartinHDetails: ProductDetailInfo = {
  overview:
    "TISARTIN-H combines Telmisartan (40 mg) with Hydrochlorothiazide (12.5 mg) to ensure a healthier heart through powerful 24-hour blood pressure control. A safe and effective organ-protecting alternative to ACE inhibitors (such as Ramipril) and their combinations.",
  targetAudience:
    "Indicated for moderate to severe hypertension and for hypertensive patients not adequately controlled on monotherapy.",
  keyFeatures: [
    {
      title: "Organ-Protecting Antihypertensive",
      description:
        "Delivers comprehensive cardiorenal protection by blocking angiotensin II and reducing arterial wall stress.",
    },
    {
      title: "Powerful 24-Hour BP Control",
      description:
        "Maintains consistent blood pressure lowering throughout the entire 24-hour dosing interval.",
    },
    {
      title: "Effective Alternative to Ramipril",
      description:
        "Provides equivalent or superior cardiorenal protection without the bradykinin-mediated dry cough associated with ACE inhibitors.",
    },
    {
      title: "Synergistic Hemodynamic Action",
      description:
        "Combines renin-angiotensin-aldosterone blockade with gentle volume depletion for enhanced efficacy.",
    },
  ],
  compositionList: [
    {
      ingredient: "Telmisartan",
      strength: "40 mg",
      role: "Angiotensin receptor blocker with 24-h half-life; ensures cardiac & renal organ protection",
    },
    {
      ingredient: "Hydrochlorothiazide",
      strength: "12.5 mg",
      role: "Thiazide diuretic; promotes sodium and water excretion to reduce plasma volume",
    },
  ],
  keyBenefits: [
    "Powerful 24-hour blood pressure control ensuring a healthier heart",
    "Organ-protecting antihypertensive therapy preserving renal and cardiac function",
    "Safe and effective alternative to Ramipril and ACE inhibitor combinations",
    "Proven efficacy in moderate to severe hypertension uncontrolled on monotherapy",
    "Reduces peripheral vascular resistance and prevents morning blood pressure surges",
  ],
  moleculeBenefits: [
    {
      molecule: "Telmisartan",
      strength: "40 mg",
      points: [
        "Selective AT1 receptor blocker with the highest receptor affinity and longest half-life (24 h)",
        "Suppresses vascular remodeling, left ventricular hypertrophy, and proteinuria",
      ],
    },
    {
      molecule: "Hydrochlorothiazide",
      strength: "12.5 mg",
      points: [
        "Reduces extracellular fluid volume and vascular reactivity to pressor agents",
        "Synergizes with Telmisartan for robust dual-pathway blood pressure reduction",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 tablet once daily in the morning, or as directed by a physician",
    administration: "Swallow whole with water with or without food. Take at the same time each day.",
    duration: "Long-term maintenance therapy for sustained blood pressure regulation.",
    precautions: "Do not use during pregnancy. Periodic monitoring of serum potassium, sodium, and creatinine is recommended.",
  },
  scientificClaim:
    "Ensure Healthier Heart — Powerful 24-Hour Blood Pressure Control with Organ Protection.",
  clinicalNote:
    "Indications: Moderate to severe hypertension, and patients uncontrolled on monotherapy.",
  disclaimer:
    "TISARTIN-H is a prescription medicine. Use under the guidance of a qualified medical practitioner.",
};

const tisartin40Details: ProductDetailInfo = {
  overview:
    "TISARTIN-40 delivers Telmisartan 40 mg, an advanced once-daily angiotensin II receptor blocker providing powerful 24-hour blood pressure reduction, organ protection, and cardiovascular risk management.",
  targetAudience:
    "Indicated for essential hypertension, heart failure management, and cardiovascular risk reduction in high-risk patients.",
  keyFeatures: [
    {
      title: "24-Hour Elimination Half-Life",
      description:
        "The longest half-life among all ARBs (24 hours), ensuring uncompromised blood pressure control into the early morning hours.",
    },
    {
      title: "Superior Diastolic Reduction",
      description:
        "Demonstrates greater reduction in diastolic blood pressure compared to ACE inhibitors in essential hypertension.",
    },
    {
      title: "Proven Organ Protection",
      description:
        "Reduces cardiovascular mortality, myocardial infarction, and stroke risk in hypertensive patients.",
    },
    {
      title: "High Tolerability Profile",
      description:
        "Free from dry cough and angioedema typically associated with ACE inhibitor therapy.",
    },
  ],
  compositionList: [
    {
      ingredient: "Telmisartan",
      strength: "40 mg",
      role: "Selective AT1 receptor blocker with 24-hour terminal elimination half-life",
    },
  ],
  keyBenefits: [
    "Reliable 24-hour blood pressure control with a healthier lifeline",
    "Provides extensive organ protection for heart and blood vessels",
    "Indicated for essential hypertension and heart failure management",
    "Produces greater diastolic blood pressure reduction than enalapril",
    "Improves metabolic profile and insulin sensitivity via partial PPAR-gamma activation",
  ],
  moleculeBenefits: [
    {
      molecule: "Telmisartan",
      strength: "40 mg",
      points: [
        "Selective non-peptide AT1 receptor blocker with high lipophilicity and tissue penetration",
        "Terminal elimination half-life of 24 hours prevents the early-morning blood pressure surge",
        "Significantly reduces cardiovascular mortality and stroke risk in high-risk patients",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 tablet once daily, or as directed by a physician",
    administration: "Swallow whole with a glass of water, with or without meals.",
    duration: "Long-term daily maintenance therapy as prescribed by a doctor.",
    precautions: "Contraindicated in pregnancy. Regular blood pressure and renal function monitoring recommended.",
  },
  scientificClaim:
    "TISARTIN-40 — With Healthier Lifeline. Essential Hypertension & Heart Failure Management.",
  clinicalNote:
    "Primary indications: Essential hypertension, heart failure co-management, and cardiovascular risk reduction.",
  disclaimer:
    "TISARTIN-40 is a prescription medicine. Use under the guidance of a healthcare professional.",
};

const xelivDetails: ProductDetailInfo = {
  overview:
    "XELIV Tablets combine Levocetirizine (5 mg) and Montelukast Sodium (10 mg), providing comprehensive dual-action management as the specialist for respiratory allergies. Scientifically formulated to arrest allergic rhinitis and prevent progression to nocturnal wheezing, dyspnoea, and bronchial inflammation.",
  targetAudience:
    "Indicated for allergic rhinitis progressing to wheezing, dyspnoea, nasal congestion, and nocturnal awakening; highly effective in hay fever, urticaria, asthma, and exercise-induced bronchospasm.",
  keyFeatures: [
    {
      title: "Dual-Action Respiratory Defense",
      description:
        "Simultaneously blocks histamine H1 receptors and cysteinyl leukotrienes to suppress both early- and late-phase allergic airway cascades.",
    },
    {
      title: "3rd Generation H1 Antagonist",
      description:
        "Levocetirizine offers fast onset of action, long-acting 24-hour relief, non-sedating profile, and potent anti-inflammatory effects.",
    },
    {
      title: "Selective Leukotriene Receptor Antagonist",
      description:
        "Montelukast prevents airway edema, relieves smooth muscle bronchoconstriction, and causes sustained bronchodilation.",
    },
    {
      title: "Arrests Allergy Progression",
      description:
        "Effectively controls allergic rhinitis from progressing into nocturnal awakening, coughing, wheezing, and dyspnoea.",
    },
  ],
  compositionList: [
    {
      ingredient: "Levocetirizine Dihydrochloride",
      strength: "5 mg",
      role: "3rd generation selective H1 receptor antagonist; fast onset, non-sedating with anti-inflammatory activity",
    },
    {
      ingredient: "Montelukast Sodium",
      strength: "10 mg",
      role: "Selective leukotriene receptor antagonist; prevents airway edema & causes bronchodilation",
    },
  ],
  keyBenefits: [
    "The specialist for respiratory allergies and allergic rhinitis management",
    "Prevents allergic rhinitis from progressing to wheezing, dyspnoea, and nocturnal awakening",
    "Fast onset of action, long-acting 24-hour protection, and non-sedating profile",
    "Prevents airway edema, relieves smooth muscle constriction, and promotes bronchodilation",
    "Relieves nasal congestion, rhinorrhea, sneezing, and ocular itching",
    "Effective in hay fever, urticaria, rhinitis, asthma, and exercise-induced bronchospasm",
  ],
  moleculeBenefits: [
    {
      molecule: "Levocetirizine",
      strength: "5 mg",
      points: [
        "3rd generation selective H1 receptor antagonist with minimal blood-brain barrier penetration",
        "Fast onset of action with sustained, long-acting anti-allergic efficacy",
        "Exerts significant anti-inflammatory effects by inhibiting eosinophil chemotaxis",
      ],
    },
    {
      molecule: "Montelukast Sodium",
      strength: "10 mg",
      points: [
        "Potent selective cysteinyl leukotriene (CysLT1) receptor antagonist",
        "Prevents airway mucosal edema, reduces mucus hypersecretion, and causes bronchodilation",
        "Inhibits smooth muscle contraction and suppresses secondary respiratory tract inflammation",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults & Adolescents (15+ yrs): 1 tablet once daily, preferably in the evening, or as directed by a physician",
    administration: "Swallow whole with a glass of water, with or without food.",
    duration: "As prescribed for seasonal allergic rhinitis, perennial allergies, or persistent asthma co-therapy.",
    precautions: "Prescription medication. Inform doctor of any pre-existing mood changes or hepatic impairment.",
  },
  scientificClaim:
    "XELIV — The Specialist for RESPIRATORY ALLERGIES.",
  clinicalNote:
    "Indications: Allergic Rhinitis progressing to Wheezing, Dyspnoea, Nasal Congestion, and Nocturnal Awakening. Effective in: Allergy, Hay Fever, Urticaria, Rhinitis, Asthma, and Exercise-Induced Bronchospasm.",
  disclaimer:
    "XELIV is a prescription anti-allergic and respiratory combination. Use strictly under the guidance of a qualified healthcare professional.",
};

const bromzerDetails: ProductDetailInfo = {
  overview:
    "BROMZER Enteric Coated Tablets combine Trypsin (48 mg), Bromelain (90 mg), and Rutoside Trihydrate (100 mg). Formulated for excellent proteolytic activity with natural anti-inflammatory power to accelerate resolution of edema, hematoma, and pain following trauma or surgery.",
  targetAudience:
    "Indicated for edema, hematoma, and pain associated with accidental injuries, surgical trauma, episiotomies, pelvic inflammatory diseases (PIDs), hysterectomy, fractures, muscle injuries, and post-cesarean section.",
  keyFeatures: [
    {
      title: "Proteolytic & Fibrinolytic Action",
      description:
        "Synergistic proteolytic enzymes break down fibrinous barriers and accelerate reabsorption of inflammatory exudates and hematomas.",
    },
    {
      title: "Natural Anti-Inflammatory Power",
      description:
        "Combines pineapple-derived Bromelain and intestinal Trypsin with plant flavonoid Rutoside for natural, gastro-safe inflammation control.",
    },
    {
      title: "Tissue Debridement & Edema Relief",
      description:
        "Removes dead, necrotic, and damaged tissues at wound sites, significantly reducing swelling, sinus edema, and pain.",
    },
    {
      title: "Enteric Coated Formulation",
      description:
        "Protects active enzymes from gastric acid degradation, ensuring optimal absorption in the small intestine.",
    },
  ],
  compositionList: [
    {
      ingredient: "Trypsin",
      strength: "48 mg",
      role: "Proteolytic enzyme accelerating biochemical repair and joint tissue recovery",
    },
    {
      ingredient: "Bromelain",
      strength: "90 mg",
      role: "Natural pineapple stem enzyme; reduces post-surgical swelling & debrides damaged tissues",
    },
    {
      ingredient: "Rutoside Trihydrate",
      strength: "100 mg",
      role: "Flavonoid antioxidant reducing vascular permeability in rheumatic & degenerative inflammation",
    },
  ],
  keyBenefits: [
    "Excellent proteolytic activity with natural anti-inflammatory power",
    "Rapidly resolves edema, hematomas, and post-traumatic swelling",
    "Accelerates wound healing and removes cellular debris at injury sites",
    "Effective in rheumatic and degenerative conditions (RA, OA, tendonitis, bursitis)",
    "Non-NSAID enzyme therapy with high gastrointestinal safety",
  ],
  moleculeBenefits: [
    {
      molecule: "Trypsin",
      strength: "48 mg",
      points: [
        "Natural proteolytic enzyme speeding up vital biochemical recovery cascades",
        "Breaks down localized fibrinous deposits to restore microvascular blood flow",
      ],
    },
    {
      molecule: "Bromelain",
      strength: "90 mg",
      points: [
        "Concentrated enzyme from pineapple stem reducing acute inflammatory swelling and sinus congestion",
        "Aids in removing damaged tissues and necrotic cellular debris after surgery or burns",
      ],
    },
    {
      molecule: "Rutoside Trihydrate",
      strength: "100 mg",
      points: [
        "Potent capillary-stabilizing flavonoid that strengthens blood vessel walls",
        "Controls inflammatory episodes in osteoarthritis, rheumatoid arthritis, and soft-tissue trauma",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 tablet twice or thrice daily, or as directed by a physician",
    administration: "Swallow whole with water 30–60 minutes before meals or on an empty stomach. Do not crush or chew.",
    duration: "As prescribed during acute post-traumatic, post-operative, or inflammatory periods.",
    precautions: "Do not chew or break the enteric coating. Caution in patients with severe bleeding disorders.",
  },
  scientificClaim:
    "BROMZER — Excellent Proteolytic Activity with Natural Anti-inflammatory Power.",
  clinicalNote:
    "Indications: Edema, Hematoma & Pain associated with Accidental Injuries, Surgical Trauma, Episiotomies, PID's, Hysterectomy, Fractures, Muscle Injuries, and Post-Cesarean Section.",
  disclaimer:
    "BROMZER is a prescription proteolytic enzyme formulation. Use strictly under medical supervision.",
};

const bromzerADetails: ProductDetailInfo = {
  overview:
    "BROMZER-A Enteric Coated Tablets combine Trypsin (48 mg), Bromelain (90 mg), Rutoside Trihydrate (100 mg), and Aceclofenac (100 mg). Designed to take the flame for complete fitness by integrating proteolytic, fibrinolytic, and mucolytic actions with potent NSAID analgesia.",
  targetAudience:
    "Indicated for severe painful inflammatory conditions: accidental injuries, surgical trauma, fractures, muscle injuries, episiotomies, hysterectomy, post-cesarean section, and pelvic inflammatory disease (PID).",
  keyFeatures: [
    {
      title: "Take the Flame for Complete Fitness",
      description:
        "Quadruple-action combination addressing pain, inflammation, edema, and necrotic tissue simultaneously.",
    },
    {
      title: "Degrades Kinins & Inflammatory Mediators",
      description:
        "Enhances degradation of kininogens and bradykinin, and potently inhibits the synthesis and release of inflammatory mediators.",
    },
    {
      title: "Cleanses Wound Site",
      description:
        "Eradicates necrotic tissues at the wound site, while fibrinolytic action clears localized microthrombi.",
    },
    {
      title: "Enhances Antibiotic Penetration",
      description:
        "Reduces required doses of conventional NSAIDs and enhances antibiotic bioavailability at the infection/injury site for rapid recovery.",
    },
  ],
  compositionList: [
    {
      ingredient: "Trypsin",
      strength: "48 mg",
      role: "Proteolytic enzyme; clears cellular debris and activates tissue remodeling",
    },
    {
      ingredient: "Bromelain",
      strength: "90 mg",
      role: "Reduces post-surgical and post-traumatic edema, sinus swelling & inflammation",
    },
    {
      ingredient: "Rutoside Trihydrate",
      strength: "100 mg",
      role: "Capillary-protective bioflavonoid; prevents microvascular extravasation",
    },
    {
      ingredient: "Aceclofenac",
      strength: "100 mg",
      role: "Targeted NSAID providing powerful pain relief and COX-2 anti-inflammatory action",
    },
  ],
  keyBenefits: [
    "Takes the flame for complete fitness with rapid analgesic and anti-inflammatory relief",
    "Offers proteolytic, fibrinolytic, and mucolytic properties",
    "Enhances degradation of kininogens and bradykinin to arrest pain transmission",
    "Inhibits synthesis and release of acute inflammatory mediators",
    "Eradicates necrotic tissues at the wound site to promote clean tissue healing",
    "Allows increased penetration and absorption of antibiotics for faster recovery",
    "Reduces the required doses of conventional NSAID therapy, minimizing side effects",
  ],
  moleculeBenefits: [
    {
      molecule: "Enzyme Triad (Trypsin + Bromelain + Rutoside)",
      strength: "48 mg + 90 mg + 100 mg",
      points: [
        "Provides proteolytic and fibrinolytic actions to digest inflammatory exudates and hematomas",
        "Eradicates necrotic tissues at the wound site, enabling faster surgical and traumatic recovery",
        "Increases antibiotic tissue penetration to prevent secondary bacterial infection",
      ],
    },
    {
      molecule: "Aceclofenac",
      strength: "100 mg",
      points: [
        "Potent analgesic and anti-inflammatory with high gastric safety",
        "Directly suppresses prostaglandin synthesis to alleviate intense post-traumatic and surgical pain",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 tablet twice daily, or as prescribed by a surgeon / physician",
    administration: "Swallow whole with water 30–60 minutes before meals. Do not chew or crush.",
    duration: "Short-term treatment of acute surgical, post-traumatic, or gynecological pain and edema.",
    precautions: "Prescription medication. Contraindicated in active peptic ulceration or severe bleeding disorders.",
  },
  scientificClaim:
    "BROMZER-A — Take the Flame for Complete Fitness.",
  clinicalNote:
    "Indications: Accidental injuries, Surgical Trauma, Fractures, Episiotomies, Hysterectomy, Muscle Injuries, PID's, and Post-Cesarean Section.",
  disclaimer:
    "BROMZER-A is a prescription enzyme-NSAID combination. Use strictly under medical supervision.",
};

const cydonDetails: ProductDetailInfo = {
  overview:
    "CYDON Syrup is an appetite stimulant and hepatoprotective formulation combining Cyproheptadine HCl (2 mg), Tricholine Citrate (275 mg), and Sorbitol. Scientifically formulated to strengthen liver function, evoke natural appetite, and support healthy weight gain.",
  targetAudience:
    "Indicated for loss of appetite, anorexia nervosa, weight gain adjunct in tubercular & antiretroviral regimens, and hepatic fat metabolism in liver cirrhosis.",
  keyFeatures: [
    {
      title: "Evokes Appetite & Boosts Weight Gain",
      description:
        "Cyproheptadine stimulates the hypothalamic appetite center, enhancing caloric intake, body weight, height, and BMI percentiles.",
    },
    {
      title: "Lipotropic Liver Protection",
      description:
        "Tricholine Citrate exerts lipotropic action to mobilize excess hepatic lipids and treat fatty liver and liver cirrhosis.",
    },
    {
      title: "Cholagogue Gallbladder Action",
      description:
        "Sorbitol promotes the evacuation of a sluggish gallbladder due to its natural cholagogue action.",
    },
    {
      title: "Dual Adult & Pediatric Regimen",
      description:
        "Palatable syrup formulation with calibrated dosing for both growing children and adults needing convalescent nutrition.",
    },
  ],
  compositionList: [
    {
      ingredient: "Cyproheptadine Hydrochloride",
      strength: "2 mg (per 5 mL)",
      role: "Appetite stimulant acting on hypothalamic hunger center; enhances BMI & fat-free mass",
    },
    {
      ingredient: "Tricholine Citrate",
      strength: "275 mg (per 5 mL)",
      role: "Lipotropic agent clearing liver fat, assisting liver cirrhosis recovery & fat metabolism",
    },
    {
      ingredient: "Sorbitol Solution (70%)",
      strength: "q.s. (Base)",
      role: "Cholagogue base facilitating sluggish gallbladder evacuation & gentle bowel regulation",
    },
  ],
  keyBenefits: [
    "Get back the crave for food — effectively evokes healthy natural appetite",
    "Strengthens liver function and accelerates hepatic fat metabolism",
    "Enhances body weight, height, BMI percentiles, and fat-free mass in anorexia",
    "Valuable adjunct for weight gain in tubercular and antiretroviral regimens",
    "Beneficial in treating liver cirrhosis and sluggish gallbladder evacuation",
    "Well-tolerated syrup with clear pediatric and adult dosing guidelines",
  ],
  moleculeBenefits: [
    {
      molecule: "Cyproheptadine HCl",
      strength: "2 mg",
      points: [
        "Effective appetite stimulant that enhances body weight, height, BMI percentiles & fat-free mass",
        "Beneficial in inducing weight in patients suffering from anorexia nervosa & history of birth complications",
      ],
    },
    {
      molecule: "Tricholine Citrate",
      strength: "275 mg",
      points: [
        "Beneficial in treating liver cirrhosis by showing lipotropic action and fat metabolism",
        "Prevents hepatic fat accumulation and protects liver cell integrity",
      ],
    },
    {
      molecule: "Sorbitol",
      strength: "Base",
      points: [
        "Effective in evacuation of sluggish gallbladder due to its cholagogue action",
        "Promotes biliary flow and prevents constipation associated with altered eating habits",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 2 teaspoons (10 mL) three times daily (TID) before meals. Children: 1 teaspoon (5 mL) twice daily (BID) before meals, or as directed by a physician",
    administration: "Administer 15 to 30 minutes before meals for optimal appetite stimulation.",
    duration: "Continue until adequate nutritional intake and weight gain goals are achieved.",
    precautions: "May cause mild initial drowsiness. Use caution when driving or operating machinery.",
  },
  scientificClaim:
    "Get Back the Crave for Food with CYDON — Strengthens Liver Function... EVOKES APPETITE.",
  clinicalNote:
    "Key Indications: Loss of appetite, Anorexia nervosa, As an adjunct of tubercular & antiretroviral regimen for weight gain, and Liver cirrhosis.",
  disclaimer:
    "CYDON Syrup is a prescription appetite stimulant and hepatoprotective syrup. Use under medical guidance.",
};

const decaclav625Details: ProductDetailInfo = {
  overview:
    "DECACLAV-625 (DECALAV-625) Tablets combine Amoxycillin (500 mg), Potassium Clavulanate (125 mg), and Lactic Acid Bacillus. Scientifically designed for harder infections that need smarter treatments, restoring antibacterial efficacy against beta-lactamase producing pathogens while safeguarding gut microflora against antibiotic-associated diarrhea.",
  targetAudience:
    "Indicated for polymicrobial and resistant bacterial infections: Respiratory Tract Infections (RTI), Urinary Tract Infections (UTI), Skin & Soft Tissue Infections (SSTI), Dental Infections, Surgical Infections, Bone & Joint Infections, Community-Acquired Pneumonia, and Pelvic Inflammatory Disease (PID).",
  keyFeatures: [
    {
      title: "Harder Infections Need Smarter Treatments",
      description:
        "Synergistic antibiotic-inhibitor combination that restores bactericidal efficacy against resistant beta-lactamase producing organisms.",
    },
    {
      title: "Broad-Spectrum Antibacterial Coverage",
      description:
        "Amoxycillin covers a wide range of Gram-positive and Gram-negative organisms across community and hospital infections.",
    },
    {
      title: "Beta-Lactamase Shielding",
      description:
        "Potassium Clavulanate irreversibly inactivates bacterial beta-lactamase enzymes, preventing penicillin degradation.",
    },
    {
      title: "Gut Microflora Protection",
      description:
        "Lactic Acid Bacillus maintains the intestinal microbiome ecosystem and eradicates episodes of amoxycillin-induced diarrhea.",
    },
  ],
  compositionList: [
    {
      ingredient: "Amoxycillin (as Trihydrate)",
      strength: "500 mg",
      role: "Broad-spectrum bactericidal penicillin covering Gram-positive and Gram-negative bacteria",
    },
    {
      ingredient: "Potassium Clavulanate (Clavulanic Acid)",
      strength: "125 mg",
      role: "Potent suicide beta-lactamase inhibitor restoring amoxicillin potency against resistant strains",
    },
    {
      ingredient: "Lactic Acid Bacillus",
      strength: "60 Million Spores",
      role: "Probiotic spore restoring gut microflora ecosystem & preventing antibiotic diarrhea",
    },
  ],
  keyBenefits: [
    "Combination that excels against harder infections requiring smarter treatment",
    "Broad-spectrum bactericidal activity covering Gram-positive and Gram-negative pathogens",
    "Restores clinical efficacy against beta-lactamase resistant bacteria",
    "Lactic Acid Bacillus protects intestinal ecosystem and eradicates diarrhea",
    "Proven clinical outcomes in surgical, respiratory, dental, and urological infections",
  ],
  moleculeBenefits: [
    {
      molecule: "Amoxycillin",
      strength: "500 mg",
      points: [
        "Broad-spectrum antibiotic covering Gram-positive and Gram-negative organisms",
        "Interferes with bacterial cell wall peptidoglycan synthesis, causing rapid lysis",
        "Produces excellent clinical results across a wide variety of systemic infections",
      ],
    },
    {
      molecule: "Potassium Clavulanate",
      strength: "125 mg",
      points: [
        "A class-apart beta-lactamase inhibitor that binds irreversibly to beta-lactamase enzymes",
        "Prevents the enzymatic degradation of amoxycillin",
        "Extends spectrum of action and restores full clinical efficacy against resistant pathogens",
      ],
    },
    {
      molecule: "Lactic Acid Bacillus",
      strength: "Probiotic Spores",
      points: [
        "Maintains microflora-induced ecosystem in the intestine during antibiotic therapy",
        "Eradicates episodes of antibiotic-associated diarrhea (AAD) due to amoxycillin",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults & Adolescents: 1 tablet every 12 hours (twice daily) or every 8 hours, or as prescribed by a physician",
    administration: "Swallow whole with water at the start of a light meal to maximize absorption and reduce gastric upset.",
    duration: "Complete the full 5 to 10-day prescribed course. Do not stop early to prevent microbial resistance.",
    precautions: "Prescription antibiotic. Contraindicated in penicillin allergy or history of cholestatic jaundice.",
  },
  scientificClaim:
    "DECACLAV-625 — Harder Infections Need Smarter Treatments. Combination That Excels Against Infections.",
  clinicalNote:
    "Indications: R.T.I., U.T.I., S.S.T.I., Dental Infections, Surgical Infection, Bone and Joint Infections, Community-Acquired Pneumonia, and Pelvic Inflammatory Disease.",
  disclaimer:
    "DECACLAV-625 is a prescription antibacterial formulation. To be used strictly under medical supervision.",
};

const decagabaNtDetails: ProductDetailInfo = {
  overview:
    "DECAGABA-NT Tablets combine Gabapentin (400 mg) and Nortriptyline Hydrochloride (10 mg). Scientifically formulated to attenuate the flame of burning neuropathic pain by combining first-line voltage-gated calcium channel modulation with central descending pain pathway enhancement.",
  targetAudience:
    "Indicated for diabetic neuropathy, peripheral neuropathy, drug-induced neuropathy, post-herpetic neuralgia, and fibromyalgia.",
  keyFeatures: [
    {
      title: "Attenuates Burning Neuropathic Pain",
      description:
        "Dual-action synergy suppressing central neuronal hyperexcitability and inhibiting pain signal transmission in damaged peripheral nerves.",
    },
    {
      title: "First-Line Neuropathic Pain Agent",
      description:
        "Gabapentin binds to the alpha-2-delta subunit of voltage-gated calcium channels, inhibiting the release of excitatory neurotransmitters.",
    },
    {
      title: "Sodium Channel Blockade & Analgesia",
      description:
        "Nortriptyline blocks sodium channels and inhibits serotonin/norepinephrine reuptake, contributing to potent analgesic effects.",
    },
    {
      title: "Mood & Sleep Stabilization",
      description:
        "Produces clinically meaningful improvements in associated insomnia, anxiety, and depressive symptoms common in chronic neuropathy.",
    },
  ],
  compositionList: [
    {
      ingredient: "Gabapentin",
      strength: "400 mg",
      role: "First-line neuropathic agent; binds alpha-2-delta subunit & inhibits excitatory neurotransmitter release",
    },
    {
      ingredient: "Nortriptyline Hydrochloride",
      strength: "10 mg",
      role: "Second-generation TCA; blocks sodium channels and boosts descending inhibitory pain pathways",
    },
  ],
  keyBenefits: [
    "Attenuates the flame of burning, lancinating neuropathic pain",
    "First-line recommended therapy for diabetic peripheral neuropathy",
    "Inhibits release of excitatory neurotransmitters to calm sensitized nerves",
    "Blocks sodium channels contributing to sustained analgesic effects",
    "Addresses comorbid neuropathic sleep disturbance, anxiety, and depression",
    "Effective in fibromyalgia, post-herpetic neuralgia, and drug-induced neuropathy",
  ],
  moleculeBenefits: [
    {
      molecule: "Gabapentin",
      strength: "400 mg",
      points: [
        "First-line agent for neuropathic pain recommended by international pain guidelines",
        "Selectively modulates presynaptic P/Q-type voltage-sensitive calcium channels",
        "Inhibits the release of excitatory neurotransmitters (glutamate, substance P), reducing neuropathic pain",
      ],
    },
    {
      molecule: "Nortriptyline HCl",
      strength: "10 mg",
      points: [
        "Second-generation tricyclic antidepressant used to treat neuropathic pain",
        "Blocks sodium channels and potently inhibits noradrenaline reuptake",
        "Significantly fewer intolerable anticholinergic side effects compared to amitriptyline",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 tablet once daily at bedtime, or as prescribed by a neurologist / physician",
    administration: "Swallow whole with water at bedtime to minimize daytime somnolence.",
    duration: "Chronic maintenance therapy under regular physician follow-up.",
    precautions: "May cause drowsiness or dizziness. Do not discontinue abruptly; taper gradually under medical guidance.",
  },
  scientificClaim:
    "DECAGABA-NT — Attenuate the Flame of Burning Neuropathic Pain. Perform to Excel.",
  clinicalNote:
    "Indications: Diabetic Neuropathy, Peripheral Neuropathy, Drug-Induced Neuropathy, Fibromyalgia, and Post-Herpetic Neuralgia.",
  disclaimer:
    "DECAGABA-NT is a prescription neuropathic pain medication. Use strictly under the guidance of a qualified healthcare professional.",
};

const decagabaNt100Details: ProductDetailInfo = {
  overview:
    "DECAGABA-NT 100 Tablets combine low-dose Gabapentin (100 mg) and Nortriptyline Hydrochloride (10 mg). Designed as an ideal starter and titration formula to attenuate neuropathic pain with minimal sedation and maximum tolerability.",
  targetAudience:
    "Indicated for mild-to-moderate diabetic neuropathy, post-herpetic neuralgia, drug-induced neuropathy, and elderly patients requiring gentle dose initiation.",
  keyFeatures: [
    {
      title: "Gentle Dose Initiation & Titration",
      description:
        "Calibrated 100 mg/10 mg strength allows smooth step-up titration with minimal risk of initial dizziness or somnolence.",
    },
    {
      title: "FDA-Approved Neuropathic Component",
      description:
        "Gabapentin is FDA approved for post-herpetic neuralgia with limited intestinal absorption, high tolerability, and no significant drug interactions.",
    },
    {
      title: "Second-Generation TCA Advantage",
      description:
        "Nortriptyline delivers better tolerability than amitriptyline with documented improvements in insomnia, anxiety, and depression.",
    },
    {
      title: "Peripheral & Central Modulation",
      description:
        "Simultaneously reduces excitatory neurotransmitters and enhances monoaminergic descending pain inhibition.",
    },
  ],
  compositionList: [
    {
      ingredient: "Gabapentin",
      strength: "100 mg",
      role: "Low-dose anticonvulsant & neuropathic agent; reduces excitatory pain transmission with high safety",
    },
    {
      ingredient: "Nortriptyline Hydrochloride",
      strength: "10 mg",
      role: "Second-generation TCA; enhances descending inhibition and treats neuropathic insomnia",
    },
  ],
  keyBenefits: [
    "Attenuates burning neuropathic pain with an optimal tolerability profile",
    "FDA-approved molecule for post-herpetic neuralgia and diabetic nerve pain",
    "Ideal for elderly patients or initial therapy titration to avoid somnolence",
    "No significant drug-drug interactions with limited intestinal saturable absorption",
    "Provides improvements in neuropathic insomnia, anxiety, and depression",
  ],
  moleculeBenefits: [
    {
      molecule: "Gabapentin",
      strength: "100 mg",
      points: [
        "FDA approved for post-herpetic neuralgia with proven clinical efficacy",
        "Limited intestinal absorption via L-amino acid transport system ensures safety against overdosing",
        "Well tolerated with no significant hepatic cytochrome P450 drug interactions",
      ],
    },
    {
      molecule: "Nortriptyline HCl",
      strength: "10 mg",
      points: [
        "Second-generation tricyclic antidepressant with superior tolerability over amitriptyline",
        "Blocks sodium channels and enhances spinal inhibitory pain control",
        "Promotes restorative sleep and alleviates comorbid depressive symptoms",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 tablet once daily at night, or as directed by a neurologist / physician",
    administration: "Swallow whole with a glass of water at bedtime. May be titrated gradually as advised.",
    duration: "As prescribed for neuropathic pain initiation or maintenance therapy.",
    precautions: "Prescription medication. Avoid alcohol during therapy. Taper dose gradually when discontinuing.",
  },
  scientificClaim:
    "DECAGABA-NT 100 — Perform to Excel. Proven Relief for Diabetic & Post-Herpetic Neuropathic Pain.",
  clinicalNote:
    "Indications: Diabetic Neuropathy, Post-Herpetic Neuralgia, and Drug-Induced Neuropathy.",
  disclaimer:
    "DECAGABA-NT 100 is a prescription medicine. Use under the guidance of a qualified healthcare practitioner.",
};

const decaglimM1Details: ProductDetailInfo = {
  overview:
    "DECAGLIM-M1 Tablets combine Glimepiride (1 mg) and Metformin Hydrochloride Extended Release (500 mg). Scientifically formulated to manage proper glucose levels for well-being by stimulating physiological insulin release and reducing hepatic glucose output.",
  targetAudience:
    "Indicated for patients with Type 2 Diabetes inadequately controlled on monotherapy (sulfonylurea or metformin alone), hyperinsulinemia, and for the prevention of diabetic macrovascular and microvascular complications.",
  keyFeatures: [
    {
      title: "Manage Proper Glucose Levels",
      description:
        "Dual-action anti-diabetic synergy addressing both insulin deficiency and insulin resistance simultaneously.",
    },
    {
      title: "Reduces Fasting & Post-Prandial Glucose",
      description:
        "Significantly lowers both fasting plasma glucose (FPG) and post-prandial glucose (PPG) to achieve optimal HbA1c targets.",
    },
    {
      title: "Extended Release Delivery",
      description:
        "Metformin ER matrix ensures smooth 24-hour glycemic control with a superior gastrointestinal tolerability profile.",
    },
    {
      title: "Complication Prevention",
      description:
        "Provides comprehensive cardiovascular and microvascular protection against diabetic nephropathy, retinopathy, and neuropathy.",
    },
  ],
  compositionList: [
    {
      ingredient: "Glimepiride",
      strength: "1 mg",
      role: "Second-generation sulfonylurea; stimulates physiological insulin release from pancreatic beta cells",
    },
    {
      ingredient: "Metformin Hydrochloride (Extended Release)",
      strength: "500 mg",
      role: "Biguanide insulin sensitizer; decreases hepatic gluconeogenesis & enhances peripheral glucose uptake",
    },
  ],
  keyBenefits: [
    "Manage proper glucose levels for well-being and consistent glycemic stability",
    "Effective for patients inadequately controlled on sulfonylurea or metformin alone",
    "Significantly reduces fasting plasma glucose and post-prandial glucose spikes",
    "Extended Release (ER) formulation provides a better gastrointestinal tolerability profile",
    "Aids in preventing long-term macrovascular and microvascular diabetic complications",
  ],
  moleculeBenefits: [
    {
      molecule: "Glimepiride",
      strength: "1 mg",
      points: [
        "Potent insulin secretagogue with low risk of severe hypoglycemia",
        "Promotes glucose-dependent insulin secretion to maintain physiological energy balance",
      ],
    },
    {
      molecule: "Metformin ER",
      strength: "500 mg",
      points: [
        "Gold-standard first-line insulin-sensitizing agent",
        "Lowers fasting plasma insulin concentrations and suppresses hepatic glucose output",
        "Improves peripheral insulin sensitivity without inducing weight gain",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 tablet once daily with breakfast or the first main meal, or as directed by an endocrinologist",
    administration: "Swallow whole with a glass of water during meals. Do not crush or chew ER tablets.",
    duration: "Long-term daily glycemic maintenance under regular fasting and HbA1c monitoring.",
    precautions: "Contraindicated in severe renal impairment (eGFR <30 mL/min) and metabolic acidosis.",
  },
  scientificClaim:
    "DECAGLIM-M1 — Manage Proper Glucose Level for Well-Being.",
  clinicalNote:
    "Indications: Type 2 Diabetes Mellitus, Hyperinsulinemia, and Prevention of Macrovascular & Microvascular Complications.",
  disclaimer:
    "DECAGLIM-M1 is a prescription antidiabetic medicine. Use under the guidance of a qualified healthcare professional.",
};

const decaglimM2Details: ProductDetailInfo = {
  overview:
    "DECAGLIM-M2 Tablets combine Glimepiride (2 mg) and Metformin Hydrochloride Extended Release (500 mg). Designed for patients requiring higher insulin secretagogue potency to achieve robust glycemic control and prevent diabetic complications.",
  targetAudience:
    "Indicated for Type 2 Diabetes inadequately controlled on lower-dose dual therapy or monotherapy, hyperinsulinemia, and long-term vascular protection.",
  keyFeatures: [
    {
      title: "Higher Potency Glycemic Control",
      description:
        "Glimepiride 2 mg provides enhanced pancreatic beta-cell stimulation for patients needing more robust post-prandial control.",
    },
    {
      title: "Dual Fasting & Post-Prandial Reduction",
      description:
        "Significantly reduces both fasting plasma glucose (FPG) and post-prandial glucose (PPG) to achieve optimal HbA1c control.",
    },
    {
      title: "Extended Release Tolerability",
      description:
        "Metformin ER matrix ensures gentle, continuous release with minimized gastrointestinal adverse effects.",
    },
    {
      title: "End-Organ Protection",
      description:
        "Helps safeguard against macrovascular and microvascular damage across cardiovascular and renal systems.",
    },
  ],
  compositionList: [
    {
      ingredient: "Glimepiride",
      strength: "2 mg",
      role: "Sulfonylurea; stimulates phase-1 & phase-2 insulin secretion from pancreatic beta cells",
    },
    {
      ingredient: "Metformin Hydrochloride (Extended Release)",
      strength: "500 mg",
      role: "Biguanide; decreases hepatic glucose production and enhances skeletal muscle glucose uptake",
    },
  ],
  keyBenefits: [
    "Manage proper glucose levels for long-term health and well-being",
    "Proven efficacy in patients inadequately controlled on sulfonylurea or metformin alone",
    "Significantly decreases both fasting and post-prandial glucose levels",
    "Favorable tolerability profile with extended-release biguanide technology",
    "Prevents progression of diabetic microvascular and macrovascular complications",
  ],
  moleculeBenefits: [
    {
      molecule: "Glimepiride",
      strength: "2 mg",
      points: [
        "Enhanced insulin secretagogue activity to overcome glucotoxicity in poorly controlled diabetes",
        "Rapid onset of action coordinating with meal-time glucose surges",
      ],
    },
    {
      molecule: "Metformin ER",
      strength: "500 mg",
      points: [
        "Improves peripheral glucose utilization and decreases intestinal glucose absorption",
        "Reduces hepatic gluconeogenesis and preserves baseline insulin sensitivity",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 tablet once daily with breakfast or the first main meal, or as prescribed by a physician",
    administration: "Swallow whole with water during meals. Do not chew or break.",
    duration: "Long-term daily glycemic therapy with routine HbA1c and renal monitoring.",
    precautions: "Monitor blood sugar regularly to prevent hypoglycemia. Avoid excessive alcohol intake.",
  },
  scientificClaim:
    "DECAGLIM-M2 — Manage Proper Glucose Level for Well-Being.",
  clinicalNote:
    "Indications: Type 2 Diabetes Mellitus, Hyperinsulinemia, and Prevention of Macrovascular & Microvascular Complications.",
  disclaimer:
    "DECAGLIM-M2 is a prescription antidiabetic medicine. Use strictly under medical supervision.",
};

const decaglimMv1Details: ProductDetailInfo = {
  overview:
    "DECAGLIM-MV1 Tablets combine Glimepiride (1 mg), Metformin Hydrochloride ER (500 mg), and Voglibose (0.2 mg). Scientifically formulated for the specialized management of postprandial hyperglycemia in Type 2 Diabetes Mellitus.",
  targetAudience:
    "Indicated for Type 2 Diabetes patients with exaggerated postprandial glucose spikes, high carbohydrate diets, impaired glucose tolerance, and those uncontrolled on dual oral antidiabetic therapy.",
  keyFeatures: [
    {
      title: "Triple Synergistic Glycemic Control",
      description:
        "Targets carbohydrate digestion (Voglibose), insulin secretion (Glimepiride), and hepatic glucose output (Metformin ER) simultaneously.",
    },
    {
      title: "Postprandial Hyperglycemia Management",
      description:
        "Voglibose delays the digestion and absorption of disaccharides, flattening sharp post-meal blood glucose spikes.",
    },
    {
      title: "Superior GI Tolerability",
      description:
        "Voglibose demonstrates significantly fewer gastrointestinal adverse effects compared to acarbose in clinical studies.",
    },
    {
      title: "Vascular Endothelium Protection",
      description:
        "Preventing postprandial glucose excursions minimizes oxidative stress, endothelial dysfunction, and cardiovascular complications.",
    },
  ],
  compositionList: [
    {
      ingredient: "Glimepiride",
      strength: "1 mg",
      role: "Sulfonylurea; stimulates physiological pancreatic insulin secretion",
    },
    {
      ingredient: "Metformin Hydrochloride (Extended Release)",
      strength: "500 mg",
      role: "Biguanide; decreases hepatic glucose production & improves peripheral insulin sensitivity",
    },
    {
      ingredient: "Voglibose",
      strength: "0.2 mg",
      role: "Alpha-glucosidase inhibitor; delays carbohydrate digestion & suppresses postprandial glucose spikes",
    },
  ],
  keyBenefits: [
    "Specialist therapy for the management of postprandial hyperglycemia in Type 2 Diabetes",
    "Delays the digestion and absorption of sugar, lowering post-meal blood sugar levels",
    "Significantly fewer gastrointestinal side effects compared to acarbose",
    "Metformin delays progression in people with impaired glucose tolerance",
    "Protects against macrovascular and microvascular diabetic complications",
  ],
  moleculeBenefits: [
    {
      molecule: "Voglibose",
      strength: "0.2 mg",
      points: [
        "Potent competitive alpha-glucosidase inhibitor that delays disaccharide breakdown in the small intestine",
        "Prevents postprandial glycemic excursions and reduces daily glucose fluctuations (glycemic variability)",
        "Demonstrates significantly lower incidence of flatulence and diarrhea compared to acarbose",
      ],
    },
    {
      molecule: "Metformin ER",
      strength: "500 mg",
      points: [
        "Insulin-sensitizing agent lowering fasting plasma insulin by inducing peripheral glucose uptake",
        "Decreases hepatic glucose output and delays progression in patients with impaired glucose tolerance",
      ],
    },
    {
      molecule: "Glimepiride",
      strength: "1 mg",
      points: [
        "Stimulates physiological pancreatic beta-cell insulin secretion matching postprandial demands",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 tablet twice daily just before or with the first bite of main meals, or as directed by a doctor",
    administration: "Take immediately before meals so Voglibose can inhibit carbohydrate-digesting enzymes effectively.",
    duration: "Chronic glycemic maintenance therapy as prescribed by an endocrinologist.",
    precautions: "In case of hypoglycemia, use oral glucose (dextrose) instead of sucrose/cane sugar, as sucrose digestion is blocked by voglibose.",
  },
  scientificClaim:
    "DECAGLIM-MV1 — In the Management of Post Prandial Hyperglycemia in Type II Diabetes.",
  clinicalNote:
    "Primary Focus: Postprandial Hyperglycemia in Type 2 Diabetes Mellitus and Prevention of Glycemic Variability.",
  disclaimer:
    "DECAGLIM-MV1 is a prescription oral antidiabetic medicine. Use strictly under medical supervision.",
};

const decaglimMv2Details: ProductDetailInfo = {
  overview:
    "DECAGLIM-MV2 Tablets combine Glimepiride (2 mg), Metformin Hydrochloride ER (500 mg), and Voglibose (0.2 mg). An advanced triple-combination formula designed for comprehensive management of severe postprandial hyperglycemia and baseline insulin resistance in Type 2 Diabetes.",
  targetAudience:
    "Indicated for Type 2 Diabetes uncontrolled on dual combinations, patients with pronounced postprandial spikes, hyperinsulinemia, and high cardiovascular risk.",
  keyFeatures: [
    {
      title: "Enhanced Triple Action",
      description:
        "Combines Glimepiride 2 mg with Metformin ER and Voglibose for robust glycemic normalization across fasting and fed states.",
    },
    {
      title: "Arrests Postprandial Glucose Spikes",
      description:
        "Voglibose delays intestinal disaccharide breakdown, preventing rapid postprandial glycemic surges.",
    },
    {
      title: "Reduces Hepatic Glucose Output",
      description:
        "Metformin ER lowers hepatic gluconeogenesis and enhances skeletal muscle glucose sensitivity with high gastric comfort.",
    },
    {
      title: "Vascular Risk Reduction",
      description:
        "Mitigates glycemic variability, reducing the risk of diabetic microvascular and macrovascular complications.",
    },
  ],
  compositionList: [
    {
      ingredient: "Glimepiride",
      strength: "2 mg",
      role: "Sulfonylurea; stimulates insulin secretion from beta cells for higher postprandial coverage",
    },
    {
      ingredient: "Metformin Hydrochloride (Extended Release)",
      strength: "500 mg",
      role: "Biguanide; improves insulin sensitivity & suppresses excessive hepatic glucose production",
    },
    {
      ingredient: "Voglibose",
      strength: "0.2 mg",
      role: "Alpha-glucosidase inhibitor; delays carbohydrate digestion & prevents post-meal glucose spikes",
    },
  ],
  keyBenefits: [
    "Specialist triple therapy in the management of postprandial hyperglycemia in Type 2 Diabetes",
    "Glimepiride 2 mg provides enhanced secretagogue efficacy for patients with stubborn hyperglycemia",
    "Delays carbohydrate digestion and absorption, avoiding high blood glucose surges after meals",
    "Proven better gastrointestinal tolerability profile than acarbose",
    "Reduces fasting plasma glucose, post-prandial glucose, and HbA1c effectively",
  ],
  moleculeBenefits: [
    {
      molecule: "Voglibose",
      strength: "0.2 mg",
      points: [
        "Inhibits intestinal alpha-glucosidase enzymes, delaying glucose absorption into the systemic circulation",
        "Significantly reduces postprandial hyperglycemia and insulin demand",
        "Reported to have less gastrointestinal side effects compared to acarbose in clinical trials",
      ],
    },
    {
      molecule: "Metformin ER",
      strength: "500 mg",
      points: [
        "Lowers fasting plasma insulin concentrations by inducing greater peripheral glucose uptake",
        "Decreases hepatic glucose output and delays progression in impaired glucose tolerance",
      ],
    },
    {
      molecule: "Glimepiride",
      strength: "2 mg",
      points: [
        "Enhanced secretagogue potency providing reliable 24-hour glycemic control",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 tablet twice daily immediately before main meals, or as prescribed by a physician",
    administration: "Swallow whole with water right before food. Do not crush or chew ER tablets.",
    duration: "Long-term antidiabetic therapy under medical supervision.",
    precautions: "Treat hypoglycemia with pure glucose (dextrose) since sucrose breakdown is inhibited by voglibose.",
  },
  scientificClaim:
    "DECAGLIM-MV2 — In the Management of Post Prandial Hyperglycemia in Type II Diabetes.",
  clinicalNote:
    "Primary Focus: Severe Postprandial Hyperglycemia in Type 2 Diabetes Mellitus and Prevention of Vascular Complications.",
  disclaimer:
    "DECAGLIM-MV2 is a prescription oral antidiabetic medicine. Use strictly under medical supervision.",
};

const decoferCapDetails: ProductDetailInfo = {
  overview:
    "DECOFER Soft Gelatin Capsules combine Ferrous Ascorbate (100 mg), Folic Acid (1.5 mg), and Zinc Sulphate Monohydrate (22.5 mg). Scientifically formulated for the precious Hb rise as the predictable hemoglobin enhancer with superior bioavailability and gastrointestinal safety.",
  targetAudience:
    "Indicated for iron deficiency anemia during pregnancy and lactation, heavy blood loss, menorrhagia, post-surgical recovery, convalescence, and general nutritional anemia.",
  keyFeatures: [
    {
      title: "Predictable Hemoglobin Enhancer",
      description:
        "Ascorbic acid maintains iron in the soluble ferrous state even at neutral pH, resulting in 3 times higher absorption than ferric iron.",
    },
    {
      title: "19% Higher Ferritin Replenishment",
      description:
        "Clinically proven to produce a 19% higher increase in serum ferritin reserves compared to carbonyl iron formulations.",
    },
    {
      title: "High GI Tolerability",
      description:
        "Does not dissociate in the upper GI tract, virtually eliminating gastric irritation, nausea, and metallic taste.",
    },
    {
      title: "Bone Marrow & Immune Support",
      description:
        "Folic acid fuels DNA/RNA synthesis and erythropoiesis in bone marrow, while Zinc strengthens maternal and fetal immune defenses.",
    },
  ],
  compositionList: [
    {
      ingredient: "Ferrous Ascorbate",
      strength: "100 mg",
      role: "Highly bioavailable reference iron; 3x higher absorption than ferric iron with 19% greater ferritin rise",
    },
    {
      ingredient: "Folic Acid",
      strength: "1.5 mg",
      role: "Essential for DNA & RNA synthesis, bone marrow erythropoiesis & prevention of NTDs",
    },
    {
      ingredient: "Zinc Sulphate Monohydrate",
      strength: "22.5 mg",
      role: "Essential trace mineral for fetal cellular proliferation & maternal immune function",
    },
  ],
  keyBenefits: [
    "Predictable and rapid rise in hemoglobin for maternal and fetal well-being",
    "3 times higher absorption than traditional ferric iron formulations",
    "19% higher increase in serum ferritin stores than carbonyl iron",
    "Does not dissociate in the stomach, ensuring minimal gastrointestinal intolerance",
    "Folic acid supports active blood cell formation and prevents neural tube defects",
    "Zinc strengthens systemic immunity and tissue repair",
  ],
  moleculeBenefits: [
    {
      molecule: "Ferrous Ascorbate",
      strength: "100 mg",
      points: [
        "Ascorbic acid reduces ferric iron to ferrous iron, which remains soluble even at neutral intestinal pH",
        "Does not dissociate in the GI tract, minimizing free radical generation and mucosal irritation",
        "Demonstrates faster rise in hemoglobin and superior long-term ferritin storage",
      ],
    },
    {
      molecule: "Folic Acid",
      strength: "1.5 mg",
      points: [
        "Mandatory coenzyme for purine and thymidylate synthesis in red blood cell precursors",
        "Acts directly on bone marrow to accelerate erythropoiesis and red cell maturation",
      ],
    },
    {
      molecule: "Zinc Sulphate",
      strength: "22.5 mg",
      points: [
        "Essential micronutrient for immune competency, enzyme function, and healthy fetal development",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 softgel capsule once daily after meals, or as directed by an obstetrician / physician",
    administration: "Swallow whole with water after meals. Avoid taking with tea, coffee, or calcium at the same time.",
    duration: "Throughout pregnancy, lactation, or until hemoglobin and ferritin levels normalize.",
    precautions: "Keep out of reach of children. Store in a cool, dry place away from direct sunlight.",
  },
  scientificClaim:
    "DECOFER Capsules — For the Precious Hb Rise... The Predictable Hb Enhancer.",
  clinicalNote:
    "Indications: Pregnancy, Lactation, Convalescence, Menorrhagia, Acute Blood Loss, and Post-Surgical Anemia.",
  disclaimer:
    "DECOFER is a therapeutic hematinic formulation. Use under the guidance of a healthcare professional.",
};

const decoferSypDetails: ProductDetailInfo = {
  overview:
    "DECOFER Syrup delivers Ferrous Ascorbate equivalent to 30 mg elemental Iron combined with Folic Acid (0.50 mg). Scientifically formulated for pregnancy when excellent care is required, offering superior bioavailability, rapid hemoglobin rise, and excellent gastrointestinal tolerability.",
  targetAudience:
    "Indicated for pregnancy, iron deficiency anemia, post-menopausal anemia, post-surgical blood loss, menorrhagia, and anemia associated with worm infestation.",
  keyFeatures: [
    {
      title: "Superior to Conventional Iron Supplements",
      description:
        "The most widely recognized and accepted reference iron, showing a fast rise in Hb without food interactions.",
    },
    {
      title: "Gentle on the Stomach",
      description:
        "Lesser gastrointestinal side effects: avoids the nausea, gastric distress, and constipation common with conventional iron salts.",
    },
    {
      title: "Fetal Growth & NTD Prevention",
      description:
        "Folic acid supports healthy neural tube development, fetal cellular growth, and active maternal red blood cell production.",
    },
    {
      title: "Delicious Palatable Syrup",
      description:
        "Pleasant-tasting liquid formulation ensures high patient compliance during pregnancy and convalescence.",
    },
  ],
  compositionList: [
    {
      ingredient: "Ferrous Ascorbate (eq. to Elemental Iron)",
      strength: "30 mg (per 5 mL)",
      role: "Reference iron showing high bioavailability, quick Hb rise & zero food interaction",
    },
    {
      ingredient: "Folic Acid",
      strength: "0.50 mg (500 mcg per 5 mL)",
      role: "Prevents neural tube defects (NTDs) & supports embryonic cellular replication",
    },
  ],
  keyBenefits: [
    "The excellent iron supplement for pregnancy when superior care is required",
    "Exhibits high bioavailability for a quick and sustained rise in hemoglobin",
    "No food interactions and significantly lesser gastrointestinal adverse effects",
    "Folic acid supports healthy fetal growth and prevents birth defects",
    "Ideal liquid format for pregnant women sensitive to iron tablets or experiencing nausea",
  ],
  moleculeBenefits: [
    {
      molecule: "Ferrous Ascorbate",
      strength: "30 mg Iron",
      points: [
        "Widely recognized reference standard in oral iron therapy",
        "Higher fractional absorption rate directly elevates circulating hemoglobin",
        "Significantly reduced constipation and gastric distress compared to ferrous sulfate",
      ],
    },
    {
      molecule: "Folic Acid",
      strength: "0.50 mg",
      points: [
        "Protects against maternal megaloblastic anemia and prevents fetal neural tube defects",
        "Indispensable for nucleotide synthesis and rapid fetal cellular replication",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults & Pregnant Women: 1 to 2 teaspoons (5–10 mL) once or twice daily after meals, or as prescribed by a physician",
    administration: "Measure with calibrated cup/spoon and take after meals.",
    duration: "As prescribed during antenatal care or until iron stores are fully replenished.",
    precautions: "Store in a cool place. Shake well before use. Keep out of reach of children.",
  },
  scientificClaim:
    "DECOFER Syrup — Pregnancy... When Excellent Care is Required. Superior to Conventional Iron Supplements.",
  clinicalNote:
    "Indications: Iron Deficiency Anaemia, Post-Menopausal Anaemia, Post Surgical Anaemia, Anaemia due to Menorrhagia, and Anaemia due to Worm Infestation.",
  disclaimer:
    "DECOFER Syrup is a therapeutic hematinic supplement. Use under the guidance of a doctor.",
};

const decovitDetails: ProductDetailInfo = {
  overview:
    "DECOVIT is a comprehensive multivitamin, multimineral, and antioxidant formulation containing Lycopene, Lutein, Beta-Carotene, essential B-complex vitamins, Vitamin D3, minerals, and Lysine. Scientifically formulated to combat oxidative stress, promote tissue healing, strengthen immunity, and protect vital organs against degenerative diseases.",
  targetAudience:
    "Formulated for individuals with nutritional deficiencies, high oxidative stress, weakened immunity, tissue recovery needs, or daily physical and mental exhaustion.",
  keyFeatures: [
    {
      title: "Multivitamins & Multi-Minerals",
      description:
        "Provides essential micronutrients necessary for healthy individuals to prevent chronic degenerative diseases.",
    },
    {
      title: "Potent Triple Antioxidants",
      description:
        "Lycopene, Lutein, and Beta-Carotene neutralize free radicals, protecting cells against heart disease, premature aging, and oxidative damage.",
    },
    {
      title: "Tissue Healing & Organ Protection",
      description:
        "Facilitates cellular repair, tissue regeneration, and protects vital organ systems from oxidative damage.",
    },
    {
      title: "Immune & Vitality Support",
      description:
        "Strengthens the immune system and helps the body overcome physical and mental stress.",
    },
  ],
  compositionList: [
    {
      ingredient: "Antioxidants (Lycopene, Lutein, Beta-Carotene)",
      strength: "Synergistic Complex",
      role: "Neutralizes reactive free radicals; guards against cellular aging and cardiovascular degeneration",
    },
    {
      ingredient: "Vitamin D3, B6, B12 & Niacinamide",
      strength: "Therapeutic Strength",
      role: "Supports cellular energy metabolism, neuronal function, and bone mineralization",
    },
    {
      ingredient: "Folic Acid, Biotin & Ferrous Fumarate",
      strength: "Active Essential",
      role: "Supports erythropoiesis (RBC synthesis), cellular repair, and vitality",
    },
    {
      ingredient: "Lysine & Multiminerals",
      strength: "Essential Trace Minerals",
      role: "Supports protein synthesis, collagen formation, enzymatic balance, and tissue healing",
    },
  ],
  keyBenefits: [
    "Controls oxidative stress caused by free radicals",
    "Prevents damaging changes in cells and protects against heart disease and premature aging",
    "Facilitates tissue healing and protects vital organs",
    "Strengthens the body's immune defense system",
    "Helps overcome daily physical and mental stress and fatigue",
    "Available in both Tablet and palatable Syrup forms",
  ],
  moleculeBenefits: [
    {
      molecule: "Antioxidant Complex (Lycopene, Lutein, Beta-Carotene)",
      points: [
        "Prevents damaging changes in cells caused by free radicals",
        "Protects vascular endothelium and vital organs against degenerative diseases",
      ],
    },
    {
      molecule: "Multivitamins & Multi-Minerals",
      points: [
        "Necessary for maintaining cellular health and preventing degenerative illnesses",
        "Supports energy production, immune competence, and active tissue regeneration",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 tablet once daily after a meal (or 5–10 ml syrup daily), or as directed by a physician.",
    administration: "Take orally with water after meals.",
    precautions: "Nutraceutical supplement. Store in a cool, dry place away from direct sunlight.",
  },
  clinicalNote:
    "Indications: Oxidative stress, tissue healing & vital organ protection, immune strengthening, physical & mental stress, prevention of degenerative diseases.",
  scientificClaim:
    "Health is the gift of nature — preserving and maintaining it is completely our responsibility. Comprehensive multivitamin, multimineral and antioxidant therapy.",
  disclaimer:
    "Nutraceutical / dietary supplement. Formulated to support general wellness, cellular protection, and nutritional balance.",
};

const decovitPlusDetails: ProductDetailInfo = {
  overview:
    "Decovit Plus Injection is a high-potency neurotropic formulation providing Mecobalamin 1500 mcg, Pyridoxine HCl 100 mg, and Nicotinamide 100 mg in Benzyl Alcohol water for injection. Scientifically formulated for the management of neuropathy and hyperhomocysteinemia, ensuring rapid nerve regeneration, symptom regression, and cardiovascular protection in an effective once-a-day therapy.",
  targetAudience:
    "Designed for patients suffering from peripheral neuropathy, diabetic neuropathy, alcoholic neuropathy, diabetic retinopathy, hyperhomocysteinemia, or degenerative neurological disorders.",
  keyFeatures: [
    {
      title: "Faster Nerve Regeneration & Revitalization",
      description:
        "Ensures accelerated axonal repair, remyelination of damaged nerve fibers, and restored neuro-signaling.",
    },
    {
      title: "Neuropathy Symptom Regression",
      description:
        "Regresses clinical signs of neuropathy, significantly alleviating numbness, tingling, burning pain, and sensory loss.",
    },
    {
      title: "Reduces Hyperhomocysteinemia",
      description:
        "Lowers elevated plasma homocysteine levels, directly reducing the risk of cardiovascular disease (CVD) and stroke.",
    },
    {
      title: "Stimulates Hematopoietic System",
      description:
        "Stimulates red blood cell synthesis and maturation in the bone marrow, supporting tissue oxygenation.",
    },
    {
      title: "Once-a-Day High Compliance Therapy",
      description:
        "One-a-day parenteral dosing regimen engineered to keep neurons healthy with maximum patient adherence.",
    },
  ],
  compositionList: [
    {
      ingredient: "Mecobalamin (Methylcobalamin)",
      strength: "1500 mcg",
      role: "Active neurological vitamin B12; promotes myelin synthesis and axon regeneration",
    },
    {
      ingredient: "Pyridoxine Hydrochloride (Vitamin B6)",
      strength: "100 mg",
      role: "Essential coenzyme for neurotransmitter synthesis and peripheral nerve integrity",
    },
    {
      ingredient: "Nicotinamide (Vitamin B3)",
      strength: "100 mg",
      role: "Critical for cellular respiration, mitochondrial energy metabolism, and vascular health",
    },
    {
      ingredient: "Benzyl Alcohol",
      strength: "2% w/v",
      role: "Preservative in sterile water for injection",
    },
  ],
  keyBenefits: [
    "Ensures faster nerve regeneration and revitalizes damaged neurons",
    "Regresses signs and symptoms of peripheral, alcoholic, and diabetic neuropathy",
    "Once-a-day therapy designed to keep neurons healthy and increase patient compliance",
    "Stimulates the hematopoietic system of the body",
    "Reduces the risk of cardiovascular disease and stroke by controlling hyperhomocysteinemia",
    "Effective in diabetic retinopathy and degenerative neurological diseases",
  ],
  moleculeBenefits: [
    {
      molecule: "Mecobalamin",
      strength: "1500 mcg",
      points: [
        "Biologically active coenzyme form of B12 that accelerates Schwann cell synthesis and myelin sheath restoration",
        "Improves nerve conduction velocity and relieves paresthesia, tingling, and neuropathic pain",
      ],
    },
    {
      molecule: "Pyridoxine HCl",
      strength: "100 mg",
      points: [
        "Catalyzes the formation of key neuro-mediators including GABA, dopamine, and serotonin",
        "Crucial for protein and amino acid metabolism within peripheral nerve tissue",
      ],
    },
    {
      molecule: "Nicotinamide",
      strength: "100 mg",
      points: [
        "Replenishes NAD+/NADH coenzymes vital for ATP synthesis in energy-demanding neurons",
        "Improves microvascular circulation supplying peripheral nerve fibers",
      ],
    },
  ],
  recommendedUsage: {
    dosage: "Adults: 1 injection daily or as directed by a physician/neurologist based on clinical severity.",
    administration: "Administer via intramuscular (IM) or slow intravenous (IV) route under medical supervision.",
    duration: "As determined by treating specialist depending on neuropathic recovery and homocysteine monitoring.",
    precautions: "For IM/IV administration only. Not for use in neonates due to benzyl alcohol content.",
  },
  clinicalNote:
    "Indications: Oxidative Stress, Degenerative Diseases, Alcoholic Neuropathy, Diabetic Retinopathy, Peripheral Neuropathy, and Hyperhomocysteinemia.",
  scientificClaim:
    "For Neuropathy & Hyperhomocysteinemia — ONE A DAY Therapy to keep Neurons Healthy.",
  disclaimer:
    "Prescription injectable preparation. To be administered by or under the direct supervision of a registered medical practitioner.",
};

const raw: Omit<Product, "slug">[] = [
  // 1. Diabetic Care
  {
    name: "DECAGLIM-M1",
    composition: "Glimepiride 1 mg + Metformin Hydrochloride ER 500 mg",
    form: "Tablets",
    category: "diabetic-care",
    featured: true,
    packaging: "10 x 10 Tablets / Blister Pack",
    details: decaglimM1Details,
  },
  {
    name: "DECAGLIM-M2",
    composition: "Glimepiride 2 mg + Metformin Hydrochloride ER 500 mg",
    form: "Tablets",
    category: "diabetic-care",
    featured: true,
    packaging: "10 x 15 Tablets",
    image: decaglimM2Img,
    details: decaglimM2Details,
  },
  {
    name: "DECAGLIM-MV1",
    composition: "Glimepiride 1 mg + Metformin 500 mg ER + Voglibose 0.2 mg",
    form: "Tablets",
    category: "diabetic-care",
    featured: true,
    packaging: "10 x 10 Tablets / Blister Pack",
    details: decaglimMv1Details,
  },
  {
    name: "DECAGLIM-MV2",
    composition: "Glimepiride 2 mg + Metformin 500 mg ER + Voglibose 0.2 mg",
    form: "Tablets",
    category: "diabetic-care",
    featured: true,
    packaging: "10 x 10 Tablets / Blister Pack",
    details: decaglimMv2Details,
  },

  // 2. Pain & Orthopedic Care
  {
    name: "SALVOFLEX-UC",
    composition: "Rosehip Extract 500 mg + Undenatured Collagen Type II (UC-II®) 40 mg + Chondroitin Sulphate 200 mg + Sodium Hyaluronate 30 mg + Boswellia serrata 100 mg + Vitamin C 35 mg",
    form: "Softgel Capsules",
    category: "pain-orthopedic-care",
    featured: true,
    packaging: "10 x 1 x 10 Softgel Capsules / Blister Pack",
    details: salvoflexUcDetails,
  },
  {
    name: "XINAC-P",
    composition: "Aceclofenac 100 mg + Paracetamol 325 mg",
    form: "Tablets",
    category: "pain-orthopedic-care",
    featured: true,
    packaging: "10 x 10 Tablets / Blister Pack",
    details: xinacPDetails,
  },
  {
    name: "XINAC-SP",
    composition: "Aceclofenac 100 mg + Paracetamol 325 mg + Serratiopeptidase 15 mg",
    form: "Tablets",
    category: "pain-orthopedic-care",
    featured: true,
    packaging: "10 x 10 Tablets / Alu-Alu Blister Pack",
    details: xinacSpDetails,
  },
  {
    name: "XINAC-MR",
    composition: "Aceclofenac 100 mg + Paracetamol 325 mg + Chlorzoxazone 250 mg",
    form: "Tablets",
    category: "pain-orthopedic-care",
    featured: true,
    packaging: "10 x 10 Tablets / Blister Pack",
    details: xinacMrDetails,
  },
  { name: "XINAC-TH 4", composition: "Aceclofenac 100 mg + Thiocolchicoside 4 mg", form: "Tablet", category: "pain-orthopedic-care" },
  {
    name: "XINAC-TH 8",
    composition: "Aceclofenac 100 mg + Thiocolchicoside 8 mg",
    form: "Tablets",
    category: "pain-orthopedic-care",
    featured: true,
    packaging: "10 x 10 Tablets",
    image: xinacTh8Img,
    details: xinacTh8Details,
  },
  { name: "XINAC-PTC", composition: "Aceclofenac 100 mg + Paracetamol 325 mg + Trypsin Chymotrypsin 150000 AU", form: "Tablet", category: "pain-orthopedic-care" },
  {
    name: "XINAC-Gel",
    composition: "Diclofenac Diethylamine + Methyl Salicylate + Oleum Lini + Menthol",
    form: "Gel",
    category: "pain-orthopedic-care",
    featured: true,
    packaging: "30 gm Tube",
    image: "/products/xinac-gel.png",
    details: xinacGelDetails,
  },
  { name: "FLUPNAC-P", composition: "Flupirtine Maleate 100 mg + Paracetamol 325 mg", form: "Tablets", category: "pain-orthopedic-care" },
  { name: "Naprofit D 500", composition: "Domperidone + Naproxen Sodium", form: "Tablets", category: "pain-orthopedic-care" },

  // 3. Calcium & Bone Health / 4. Vitamins, Minerals & Nutritional Supplements
  {
    name: "CALZIUM",
    composition: "Calcium Citrate 1000 mg + Vitamin D3 1000 IU + Magnesium 100 mg + Zinc 4 mg",
    form: "Tablets",
    category: "vitamins-supplements",
    featured: true,
    packaging: "10 x 15 Tablets / Blister Pack",
    details: calziumDetails,
  },
  {
    name: "CALZIUM-D3 NANO",
    composition: "Cholecalciferol (Vitamin D3) Oral Solution 60,000 I.U.",
    form: "Oral Solution",
    category: "vitamins-supplements",
    featured: true,
    packaging: "4 x 5 ml Bottles (Nano Shots)",
    image: calziumD3NanoImg,
    details: calziumD3NanoDetails,
  },
  {
    name: "CALZIUM TOTAL",
    composition: "Calcitriol + Calcium Citrate Malate + Methylcobalamin + Vitamin K2-7 + L-Methyl Folate + Zinc + Magnesium",
    form: "Soft Gelatin Capsules",
    category: "vitamins-supplements",
    featured: true,
    packaging: "10 x 1 x 10 Softgel Capsules",
    image: "/products/calzium-total.png",
    details: calziumTotalDetails,
  },
  {
    name: "DECOVIT TAB",
    composition: "Lycopene, Lutein, Beta Carotene, Vitamin D3, B6, B12, Niacinamide, Folic Acid, Biotin, Ferrous Fumarate, Lysine & Multimineral",
    form: "Tablets",
    category: "vitamins-supplements",
    featured: true,
    packaging: "10 x 10 Tablets / Blister Pack",
    details: decovitDetails,
  },
  {
    name: "DECOVIT SYP",
    composition: "Multivitamin, Multiminerals & Antioxidants Syrup",
    form: "Syrup",
    category: "vitamins-supplements",
    featured: true,
    packaging: "200 ml Bottle",
    details: decovitDetails,
  },
  {
    name: "DECOFER CAP",
    composition: "Ferrous Ascorbate 100 mg + Folic Acid 1.5 mg + Zinc Sulphate Monohydrate 22.5 mg",
    form: "Soft Gelatin Capsules",
    category: "vitamins-supplements",
    featured: true,
    packaging: "10 x 10 Capsules",
    image: decoferCapImg,
    details: decoferCapDetails,
  },
  {
    name: "DECOFER SYP",
    composition: "Ferrous Ascorbate & Folic Acid Oral Suspension I.P.",
    form: "Oral Suspension",
    category: "vitamins-supplements",
    featured: true,
    packaging: "200 ml Bottle",
    image: "/products/decofer.png",
    details: decoferSypDetails,
  },
  { name: "L-WIN", composition: "L-Arginine + Vitamin C + Vitamin E + Vitamin B6 + Folic Acid + Vitamin B12 + Zinc Nano Shots", form: "Nano Shots", category: "vitamins-supplements" },
  {
    name: "Q10 OMEGA PLUS",
    composition: "Co-enzyme Q10, Lycopene, L-Arginine, Omega-3 Fatty Acid (EPA & DHA) & Selenium",
    form: "Soft Gelatin Capsules",
    category: "vitamins-supplements",
    featured: true,
    packaging: "10 x 1 x 10 Softgel Capsules",
    image: "/products/q10-omega-plus.png",
    details: q10OmegaPlusDetails,
  },
  { name: "Fertile Fem", composition: "Astaxanthin 8 mg + L-Arginine 50 mg + Lycopene 5 mg + Vitamin A 600 mcg + Vitamin B1 1.1 mg + Vitamin B2 1.4 mg + Vitamin B6 1.4 mg + Vitamin B12 2.5 mcg + Vitamin C 40 mg + Vitamin E 12 mg + Vitamin D3 400 IU + Niacin 18 mg + Folic Acid 117 mcg + Iodine 100 mcg + Magnesium 50 mg + Copper 0.7 mg + Selenium 35 mcg + Zinc 10 mg", form: "Softgel Capsule", category: "vitamins-supplements" },
  {
    name: "HAIRWIZ ADVANCE",
    composition: "Urtica Dioica Extract + Equisetum Arvense + Grape Seed Extract + Wheat Germ + Millet Extract + Amino Acids + Vitamins & Minerals",
    form: "Tablets",
    category: "vitamins-supplements",
    featured: true,
    packaging: "10 x 1 x 10 Tablets / Blister Pack",
    details: hairwizAdvanceDetails,
  },

  // 5. Digestive / Gastro Care
  { name: "ESMEPRO-40", composition: "Esomeprazole Magnesium Gastro Resistant 40 mg", form: "Tablets", category: "gastro-care", featured: true },
  { name: "ESMEPRO-DSR", composition: "Esomeprazole 40 mg (EC) + Domperidone 30 mg (SR)", form: "Capsules", category: "gastro-care" },
  { name: "ESMEPRO-L", composition: "Esomeprazole 40 mg (EC) + Levosulpiride 75 mg (SR)", form: "Capsules", category: "gastro-care" },
  { name: "Sumace-O", composition: "Sucralfate 1 gm + Oxetacaine 20 mg", form: "Syrup — 200 ml", category: "gastro-care" },
  {
    name: "CYDON",
    composition: "Cyproheptadine HCl 2 mg + Tricholine Citrate 275 mg + Sorbitol",
    form: "Syrup",
    category: "gastro-care",
    featured: true,
    packaging: "200 ml Bottle",
    details: cydonDetails,
  },

  // 6. Enzymes / Anti-inflammatory
  {
    name: "BROMZER",
    composition: "Trypsin 48 mg + Bromelain 90 mg + Rutoside Trihydrate 100 mg",
    form: "Enteric Coated Tablets",
    category: "general-healthcare",
    featured: true,
    packaging: "10 x 10 Enteric Coated Tablets / Alu-Alu Blister Pack",
    details: bromzerDetails,
  },
  {
    name: "BROMZER-A",
    composition: "Trypsin 48 mg + Bromelain 90 mg + Rutoside Trihydrate 100 mg + Aceclofenac 100 mg",
    form: "Enteric Coated Tablets",
    category: "general-healthcare",
    featured: true,
    packaging: "10 x 10 Enteric Coated Tablets / Alu-Alu Blister Pack",
    details: bromzerADetails,
  },

  // 7. Neurological / Nerve Care
  {
    name: "DECAGABA-NT",
    composition: "Gabapentin 400 mg + Nortriptyline Hydrochloride 10 mg",
    form: "Tablets",
    category: "neurological-care",
    featured: true,
    packaging: "10 x 10 Tablets / Alu-Alu Blister Pack",
    details: decagabaNtDetails,
  },
  {
    name: "DECAGABA-NT 100",
    composition: "Gabapentin 100 mg + Nortriptyline Hydrochloride 10 mg",
    form: "Tablets",
    category: "neurological-care",
    featured: true,
    packaging: "10 x 10 Tablets / Alu-Alu Blister Pack",
    details: decagabaNt100Details,
  },
  { name: "PRIGAVIN-M", composition: "Pregabalin 75 mg + Methylcobalamin 1500 mcg", form: "Tablet", category: "neurological-care", featured: true },
  {
    name: "Decovit Plus",
    composition: "Mecobalamin 1500 mcg + Pyridoxine HCl 100 mg + Nicotinamide 100 mg + Benzyl Alcohol 2%",
    form: "Injections",
    category: "neurological-care",
    featured: true,
    packaging: "5 x 2 ml Ampoules / Tray Pack",
    details: decovitPlusDetails,
  },

  // 8. Dermatology / Topical Care
  { name: "LUZOTUF Cream", composition: "Luliconazole 1% w/w", form: "Cream", category: "dermatology" },
  { name: "LUZOTUF Shampoo", composition: "Luliconazole 1% w/v + Salicylic Acid 3% w/v + Zinc Pyrithione (ZPTO) 1% w/v", form: "Shampoo", category: "dermatology" },
  { name: "Ketofex", composition: "Ketoconazole 2.0% + Cetrimide 0.5%", form: "Soap", category: "dermatology" },

  // 9. Cardiovascular / Hypertension
  {
    name: "TISARTIN-40",
    composition: "Telmisartan 40 mg",
    form: "Tablet",
    category: "cardiovascular-care",
    featured: true,
    packaging: "10 x 10 Tablets / Blister Pack",
    details: tisartin40Details,
  },
  {
    name: "TISARTIN-H",
    composition: "Telmisartan 40 mg + Hydrochlorothiazide 12.5 mg",
    form: "Tablets",
    category: "cardiovascular-care",
    featured: true,
    packaging: "10 x 10 Tablets / Blister Pack",
    details: tisartinHDetails,
  },
  {
    name: "TISARTIN-TRIO",
    composition: "Telmisartan 40 mg + Amlodipine 5 mg + Hydrochlorothiazide 12.5 mg",
    form: "Tablet",
    category: "cardiovascular-care",
    featured: true,
    packaging: "10 x 10 Tablets / Blister Pack",
    details: tisartinTrioDetails,
  },

  // 10. Anti-infective
  {
    name: "DECACLAV-625",
    composition: "Amoxycillin 500 mg + Clavulanate Potassium 125 mg",
    form: "Tablets",
    category: "anti-infective",
    featured: true,
    packaging: "10 x 1 x 10 Tablets / Alu-Alu Blister Pack",
    details: decaclav625Details,
  },
  { name: "NITRUF", composition: "Nitrofurantoin 100 mg SR", form: "Tablet", category: "anti-infective" },

  // 11. Urinary / Women's Health
  {
    name: "URINAR",
    composition: "Natural Cranberry Extract 200 mg + D-Mannose + Potassium Magnesium Citrate 978 mg",
    form: "Syrup",
    category: "womens-health",
    featured: true,
    packaging: "200 ml Bottle",
    details: urinarDetails,
  },
  {
    name: "CassyWash",
    composition: "Natural Lactic Acid (pH 3.5) + Sea Buckthorn Extracts + Gentle Cleansing Base",
    form: "Feminine Wash",
    category: "womens-health",
    featured: true,
    packaging: "100 ml / 3.38 fl. oz.",
    image: "/products/cassywash.png",
    details: cosywashDetails,
  },
  {
    name: "Myo-N-Insta",
    composition: "Myo-Inositol 1100 mg + D-Chiro-Inositol 27.6 mg + Chromium Picolinate 400 mcg + Vitamin D3 400 IU",
    form: "Tablets",
    category: "womens-health",
    featured: true,
    packaging: "10 x 1 x 10 Tablets / 1 x 10 Tablets",
    image: "/products/myo-n-insta.png",
    details: myoNInstaDetails,
  },
  { name: "HISTIZEN 8/16/24/32/48", composition: "Betahistine 8 mg / 16 mg / 24 mg / 32 mg / 48 mg", form: "Tablets", category: "general-healthcare" },

  // 12. Allergy / Respiratory & 13. Other Products
  {
    name: "XELIV",
    composition: "Montelukast Sodium 10 mg + Levocetirizine 5 mg",
    form: "Tablets",
    category: "general-healthcare",
    featured: true,
    packaging: "10 x 10 Tablets / Alu-Alu Blister Pack",
    details: xelivDetails,
  },
  { name: "DEFJART", composition: "Deflazacort 6 mg", form: "Tablet", category: "general-healthcare" },
];

export const products: Product[] = raw.map((p) => ({ ...p, slug: slugify(p.name) }));

export const getCategory = (slug: CategorySlug) =>
  categories.find((c) => c.slug === slug)!;

export const getProduct = (slug: string) => {
  if (slug === "decalav-625") {
    return products.find((p) => p.slug === "decaclav-625" || p.slug === "decalav-625");
  }
  if (slug === "decofer" || slug === "decofer-oral-suspension") {
    return products.find((p) => p.slug === "decofer-syp" || p.slug === "decofer-cap" || p.slug === "decofer");
  }
  if (slug === "decofer-cap" || slug === "decofer-capsules" || slug === "decofer-capsule") {
    return products.find((p) => p.slug === "decofer-cap");
  }
  if (slug === "xinac-th-8" || slug === "xinac-th8" || slug === "xinac-th") {
    return products.find((p) => p.slug === "xinac-th-8" || p.slug === "xinac-th8");
  }
  if (slug === "calzium-d3-nano" || slug === "calzium-d3" || slug === "calzium-nano") {
    return products.find((p) => p.slug === "calzium-d3-nano");
  }
  if (slug === "decaglim-m2" || slug === "decaglim-m-2") {
    return products.find((p) => p.slug === "decaglim-m2");
  }
  if (slug === "cosywash") {
    return products.find((p) => p.slug === "cassywash" || p.slug === "cosywash");
  }
  if (slug === "myo-n-insta-tablets" || slug === "myo-n-insta") {
    return products.find((p) => p.slug === "myo-n-insta" || p.slug === "myo-n-insta-tablets");
  }
  if (slug === "decovit") {
    return products.find((p) => p.slug === "decovit-tab" || p.slug === "decovit");
  }
  if (slug === "decovit-plus-injection" || slug === "decovit-injection") {
    return products.find((p) => p.slug === "decovit-plus");
  }
  return products.find((p) => p.slug === slug);
};

export const featuredProducts = products.filter((p) => p.featured);

export const countByCategory = (slug: CategorySlug) =>
  products.filter((p) => p.category === slug).length;
