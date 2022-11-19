-- Deploy flipr:framethrower_public.table.feedback to pg

begin;

  create table framethrower_public.feedback_request(
    id uuid primary key not null default uuid_generate_v4(),
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now(),
    animation_id text not null references framethrower_public.animation(id) on delete cascade,
    status framethrower_public.feedback_request_status not null default 'requested'
  );

  grant select on table framethrower_public.feedback_request to
  framethrower_user,
  framethrower_moderator,
  framethrower_admin;

  grant update on table framethrower_public.feedback_request to
  framethrower_user,
  framethrower_moderator,
  framethrower_admin;

  grant insert on table framethrower_public.feedback_request to
  framethrower_user,
  framethrower_moderator,
  framethrower_admin;

  create unique index feedback_request_status_animation
  on framethrower_public.feedback_request (animation_id, status)
  where status = 'requested';

commit;
