-- Deploy flipr:framethrower.role.framethrower_inactive to pg

BEGIN;

  CREATE ROLE framethrower_inactive;
  GRANT usage ON SCHEMA framethrower_public TO framethrower_inactive;

COMMIT;
