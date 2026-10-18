export type DetailItem = {
  title: string;
  body: string;
  /**
   * True when the shipped decision, metric, or outcome still needs approved copy.
   * Search the repo for PLACEHOLDER before launch.
   */
  placeholder?: boolean;
};

export type SearchMode = {
  name: string;
  method: string;
  body: string;
};

export type ArchitectureStep = {
  title: string;
  body: string;
};
