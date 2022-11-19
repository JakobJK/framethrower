-- Revert flipr:framethrower_public.table.profile_social from pg

begin;

  drop table if exists framethrower_public.profile_social cascade;

commit;
