-- Revert flipr:framethrower_public.type.animation_submission from pg

BEGIN;

  drop type if exists framethrower_public.animation_submission cascade;

COMMIT;
