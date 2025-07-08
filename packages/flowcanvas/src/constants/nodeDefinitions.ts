import type { NodeDefinition } from "../types";

export const nodeDefinitions: Record<string, NodeDefinition> = {
  http: {
    type: 'http',
    label: 'HTTP Request',
    style: {
      backgroundColor: '#f9fafb',
      borderColor: '#d1d5db',
      textColor: '#111827',
    },
    defaultSize: { width: 160, height: 80 },
  },
  math: {
    type: 'math',
    label: 'Math Node',
    style: {
      backgroundColor: '#fef3c7',
      borderColor: '#facc15',
      textColor: '#78350f',
    },
    defaultSize: { width: 120, height: 80 },
  },
};