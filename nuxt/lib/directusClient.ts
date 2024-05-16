import { createDirectus, rest } from '@directus/sdk';

export const directusClient = createDirectus('http://localhost:8055').with(rest());
