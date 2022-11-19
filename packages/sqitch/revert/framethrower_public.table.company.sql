-- Revert flipr:framethrower_public.table.company.sql from pg

begin;

  drop table if exists framethrower_public.company;

commit;
