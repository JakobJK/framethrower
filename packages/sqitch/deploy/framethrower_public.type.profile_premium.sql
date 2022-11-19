-- Deploy flipr:framethrower_public.type.premium to pg

begin;

  create type framethrower_public.profile_premium as enum
  ('default', 'plus', 'pro');

commit;

