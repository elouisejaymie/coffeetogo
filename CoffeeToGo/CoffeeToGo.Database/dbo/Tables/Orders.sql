CREATE TABLE [dbo].[Orders] (
    [OrderId]     INT                IDENTITY (1, 1) NOT NULL,
    [BeverageId]  INT                NOT NULL,
    [OrderedBy]   NVARCHAR (50)      NOT NULL,
    [Notes]       NVARCHAR (500)     NULL,
    [DateCreated] DATETIMEOFFSET (7) NOT NULL,
    [DateUpdated] DATETIMEOFFSET (7) NOT NULL,
    CONSTRAINT [PK_Orders] PRIMARY KEY CLUSTERED ([OrderId] ASC),
    CONSTRAINT [FK_Orders_Beverage] FOREIGN KEY ([BeverageId]) REFERENCES [dbo].[Beverage] ([BeverageId])
);





