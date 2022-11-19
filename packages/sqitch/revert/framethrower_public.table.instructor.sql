-- Revert flipr:framethrower_public.table.instructor from pg

begin;

  drop table framethrower_public.instructor;

commit;
