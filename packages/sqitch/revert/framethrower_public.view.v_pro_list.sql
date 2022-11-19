-- Revert flipr:framethrower_public.view.v_pro_list from pg

begin;

  drop view if exists framethrower_public.v_pro_list;

commit;
