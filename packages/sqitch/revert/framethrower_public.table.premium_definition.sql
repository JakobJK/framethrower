-- Revert flipr:framethrower_public.table.privilege from pg

begin;

  drop table if exists framethrower_public.premium_definition cascade;

commit;
