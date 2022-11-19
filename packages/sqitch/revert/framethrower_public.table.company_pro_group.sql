-- Revert framethrower:framethrower_public.table.company_pro_groups from pg

begin;

  drop table if exists framethrower_public.company_pro_group;

commit;