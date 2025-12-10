import React from 'react';

export interface BlobProps {
  color: 'coral' | 'sage';
  className?: string;
  delay?: boolean;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export interface EmailFormProps {
  location: 'hero' | 'footer';
}