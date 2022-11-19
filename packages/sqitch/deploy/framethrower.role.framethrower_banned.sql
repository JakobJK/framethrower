-- Deploy flipr:framethrower.role.framethrower_banned to pg

BEGIN;

  CREATE ROLE framethrower_banned;
  GRANT usage ON SCHEMA framethrower_public TO framethrower_banned;

COMMIT;
