-- Revert flipr:framethrower_public.view.v_feedback from pg

begin;

  drop view if exists framethrower_public.v_feedback;

commit;
