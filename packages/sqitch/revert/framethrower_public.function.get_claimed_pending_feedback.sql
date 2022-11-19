-- Revert flipr:framethrower_public.function.get_claimed_pending_feedback from pg

begin;

  drop function if exists framethrower_public.get_claimed_pending_feedback();

commit;
