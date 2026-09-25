export type PostAudience = 'all' | 'investor' | 'regulatory' | 'public' | 'culture';

export type FileType = 'PDF' | 'CSV' | 'Deck' | 'Video' | 'Memo' | 'MP4';

export interface AttachedFile {
  name: string;
  size: string;
  type: FileType;
  color?: string;
}

export interface MetricCard {
  label: string;
  value: string;
  sub: string;
}

export interface CsvLogRow {
  time: string;
  event: string;
  alt: string;
  action: string;
  tone: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  date: string;
  dateSort: number;
  category: 'Investor' | 'Regulatory' | 'Public' | 'Culture';
  audience: PostAudience;
  title: string;
  subtitle?: string;
  excerpt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    locationNote: string;
    coordinates: string;
  };
  featured?: boolean;
  thumbnail?: string;
  highlightMetrics: MetricCard[];
  intro: string;
  fieldNoteNumber: string;
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
    quote?: {
      text: string;
      author: string;
    };
    bulletPoints?: string[];
    orderedPoints?: string[];
    externalLink?: {
      badge: string;
      title: string;
      meta: string;
      href: string;
    };
  }[];
  flightMapData?: {
    corridorName: string;
    logId: string;
    verifiedTime: string;
    figNumber: string;
    caption: string;
    statsPill: string;
    statusPill: string;
  };
  videoData?: {
    title: string;
    subtitle: string;
    duration: string;
    thumbnailUrl: string;
  };
  honestNote: {
    title: string;
    content: string;
    bannerText: string;
  };
  nextSteps: {
    title: string;
    content: string;
    pills: string[];
  };
  attachedFiles: AttachedFile[];
  verificationData: {
    faaCompliance: string;
    blackboxHash: string;
    regulatoryStandard: string;
    noManualOverride: boolean;
    fullTelemetry: boolean;
  };
  pdfPreview?: {
    title: string;
    totalPages: number;
    metrics: { label: string; value: string; percent: number; isYellow?: boolean }[];
  };
  csvPreview?: {
    filename: string;
    totalRows: number;
    rows: CsvLogRow[];
  };
  landingFiles: {
    type: FileType;
    name: string;
    size: string;
  }[];
}

export interface VaultDocument {
  type: FileType;
  name: string;
  size: string;
  date: string;
}
