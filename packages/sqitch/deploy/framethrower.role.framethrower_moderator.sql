-- Deploy flipr:framethrower.role.framethrower_moderator to pg

BEGIN;

  CREATE ROLE framethrower_moderator;
  GRANT usage ON SCHEMA framethrower_public TO framethrower_moderator;

COMMIT;
