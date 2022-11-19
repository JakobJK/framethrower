-- deploy flipr:framethrower_public.table.note_comment to pg

begin;

create table framethrower_public.note_comment(
  id uuid primary key not null default uuid_generate_v4(),
  note_id text not null references framethrower_public.note(id) on delete cascade,
  body text,
  profile_id uuid not null references framethrower_public.profile(id) on delete cascade,
  status framethrower_public.publish_status not null default 'published',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

grant select on table framethrower_public.note_comment to framethrower_anonymous, framethrower_banned, framethrower_inactive, framethrower_user, framethrower_admin;
grant insert on table framethrower_public.note_comment to framethrower_user, framethrower_moderator, framethrower_admin;

commit;