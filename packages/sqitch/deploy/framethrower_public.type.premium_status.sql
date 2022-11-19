begin;
  -- These statuses matches with the stripe API
  create type framethrower_public.premium_status as enum
  ('incomplete', 'incomplete_expired', 'trialing', 'active', 'past_due', 'canceled', 'unpaid');

commit;