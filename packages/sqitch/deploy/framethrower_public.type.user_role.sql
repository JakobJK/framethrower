-- Deploy flipr:framethrower_hidden.type.user_role to pg

BEGIN;

  create type framethrower_public.user_role as enum ('framethrower_user', 'framethrower_anonymous', 'framethrower_admin', 'framethrower_banned', 'framethrower_inactive');

COMMIT;
