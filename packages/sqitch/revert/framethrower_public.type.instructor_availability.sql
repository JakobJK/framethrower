-- Revert flipr:framethrower_public.type.instructor_availability from pg

begin;

  drop type if exists framethrower_public.instructor_availability;

commit;
