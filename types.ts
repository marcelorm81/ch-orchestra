export enum InstrumentStyle {
  ETHEREAL_PAD = 'Ethereal Pad',
  SYNTH_LEAD = 'Synth Lead',
  PERCUSSIVE_PLUCK = 'Percussive Pluck',
}

export interface Point {
  x: number;
  y: number;
}

export interface TraceParticle {
  id: string;
  x: number;
  y: number;
  startTime: number;
  maxAge: number; // milliseconds
  baseSize: number;
}

export interface AudioParameters {
  frequency: number;
  volume: number;
  filterCutoff?: number;
  harmonyVolume?: number;
}