-- Revert flipr:framethrower_public.view.v_instructors_admin from pg

begin;

  drop view if exists framethrower_public.v_admin_instructor;

commit;
