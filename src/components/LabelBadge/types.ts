export type tLabelBadgeVariant =
  | 'active'
  | 'executed'
  | 'conditional'
  | 'expired'
  | 'canceled';

export interface iLabelBadgeProps {
  variant: tLabelBadgeVariant;
  status: string;
}
