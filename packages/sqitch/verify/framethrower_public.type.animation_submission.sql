-- Verify flipr:framethrower_public.type.animation_submission on pg

begin;

  select 1/count(*) from pg_type where typname = 'animation_submission';

rollback;

