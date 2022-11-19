-- Deploy flipr:framethrower_public.type.instructor_availability to pg
begin;

  create type framethrower_public.instructor_availability as ENUM
  ('available', 'busy', 'unavailable');

commit;

