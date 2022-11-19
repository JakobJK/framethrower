-- Revert flipr:framethrower_public.function.instructor_is_tilted from pg

begin;

  drop function if exists framethrower_public.instructor_is_tilted(framethrower_public.instructor);

commit;
