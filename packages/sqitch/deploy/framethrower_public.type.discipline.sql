-- Deploy flipr:framethrower_public.type.discipline to pg

begin;

  create type framethrower_public.discipline as enum (
    'modeling',
    'texturing',
    'animation',
    'cfx',
    'fx',
    'motion_graphics'
    );

commit;
