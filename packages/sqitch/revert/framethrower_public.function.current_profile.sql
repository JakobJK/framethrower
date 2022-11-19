-- Revert flipr:framethrower_public.function.current_profile from pg

BEGIN;

  drop function if exists framethrower_public.current_profile();

COMMIT;
