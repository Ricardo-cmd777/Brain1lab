export const KIT_TAGS = {
  GENERAL_USER: 12932850,
  ATHLETE: 12930797,
  COACH: 12929688,
  PARTNERS: 12931333,
  SCIENTIFIC_COMMITTEE: 13058081,
  SV_PARS_1ST_TEAM: 9353444,
  CHIP_1: 11044704,
  FRIENDS_AND_FAMILY: 11045342,
  VENDORS: 11044924,
  BRAIN_1: 8023707,
  BRAIN_1_LEAD_INTAKE: 13047614,
} as const;

export type KitTagKey = keyof typeof KIT_TAGS;

export const KIT_TAG_LABELS: Record<KitTagKey, string> = {
  GENERAL_USER: "General user",
  ATHLETE: "Athlete",
  COACH: "Coach",
  PARTNERS: "Partners",
  SCIENTIFIC_COMMITTEE: "Scientific Committee",
  SV_PARS_1ST_TEAM: "SV Pars - 1st Team",
  CHIP_1: "Chip 1",
  FRIENDS_AND_FAMILY: "Friends & Family",
  VENDORS: "Vendors",
  BRAIN_1: "Brain 1",
  BRAIN_1_LEAD_INTAKE: "Brain 1 – Lead Intake",
};
