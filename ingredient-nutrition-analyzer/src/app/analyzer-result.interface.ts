export interface AnalyzerResult {
  totalNutrients: TotalNutrienValues;
}

export interface NutrientValue {
  label: string;
  quantity: number;
}

export interface TotalNutrienValues {
  FAT: NutrientValue;
  FASAT: NutrientValue;
  FAPU: NutrientValue;
  NA: NutrientValue;
}
