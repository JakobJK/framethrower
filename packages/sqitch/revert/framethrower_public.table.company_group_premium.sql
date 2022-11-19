-- Revert framethrower:framethrower_public.table.company_group_premium from pg

begin;

  drop table if exists framethrower_public.company_group_premium;

commit;