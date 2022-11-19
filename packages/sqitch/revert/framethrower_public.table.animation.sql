-- Revert flipr:framethrower_public.table.animation from pg

begin;

  drop table if exists framethrower_public.animation;

commit;
