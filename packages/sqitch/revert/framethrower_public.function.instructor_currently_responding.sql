-- Revert flipr:framethrower_public.function.instructor_currently_responding from pg

begin;

  drop function if exists framethrower_public.instructor_currently_responding(framethrower_public.instructor);

commit;
