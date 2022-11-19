-- Revert flipr:framethrower_public.view.v_admin_feedback_overview from pg

begin;

  drop view if exists framethrower_public.v_admin_feedback_overview;

commit;
