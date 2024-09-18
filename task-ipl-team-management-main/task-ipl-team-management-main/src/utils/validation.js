import * as z from 'zod';

export const playerSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  role: z.enum(['Batsman', 'Bowler', 'All Rounder', 'WK']),
  team: z.string().min(1, 'Team is required'),
  isCaptain: z.boolean().optional(),
  isViceCaptain: z.boolean().optional(),
});
