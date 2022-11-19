-- Revert flipr:framethrower_public.view.v_your_feedback from pg

begin;

  drop view if exists framethrower_public.v_instructor_feedback;

commit;
