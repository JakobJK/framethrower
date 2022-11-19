-- Revert flipr:framethrower_public.function.animation_get_submission_amounts from pg

begin;

  drop function if exists framethrower_public.animation_get_submission_amounts(framethrower_public.animation);

commit;
