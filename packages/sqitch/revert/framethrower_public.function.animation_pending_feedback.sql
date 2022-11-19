-- Revert flipr:framethrower_public.function.animation_pending_feedback from pg

begin;

  drop function if exists framethrower_public.animation_pending_feedback(framethrower_public.animation);

commit;
