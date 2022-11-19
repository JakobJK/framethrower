-- Revert flipr:framethrower_public.view.v_pro_membership from pg

begin;

 drop view if exists framethrower_public.v_pro_membership;

commit;
