-- Revert flipr:framethrower_public.table.premium from pg

BEGIN;

  drop table if exists framethrower_public.premium cascade;

COMMIT;
