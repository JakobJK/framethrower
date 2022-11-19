-- Revert flipr:framethrower_public.view.v_admin_get_members from pg

begin;

  drop view if exists framethrower_public.v_admin_member;

commit;
