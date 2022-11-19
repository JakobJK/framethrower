-- Deploy flipr:framethrower_public.type.project_status to pg


begin;

  create type framethrower_public.publish_status as enum
  ('published',
    'blocked',
    'deleted',
    'drafted');

commit;

