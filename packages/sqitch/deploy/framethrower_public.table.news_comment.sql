-- Deploy flipr:framethrower_public.table.news_comment to pg

begin;

  create table framethrower_public.news_comment(
    id uuid primary key not null default uuid_generate_v4(),
    news_id uuid not null references framethrower_public.news(id) on delete cascade,
    body text,
    profile_id uuid not null references framethrower_public.profile(id) on delete cascade,
    status framethrower_public.publish_status not null default 'published',
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
  );
  grant select on framethrower_public.news_comment to framethrower_inactive, framethrower_anonymous, framethrower_user, framethrower_moderator, framethrower_admin;
  grant insert on framethrower_public.news_comment to framethrower_user, framethrower_moderator, framethrower_admin;

commit;
